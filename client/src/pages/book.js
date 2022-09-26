import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Section, Box, Anchor, Typography } from '../components/Core'
import PageWrapper from '../components/PageWrapper'
import { Hero } from '../sections/common'
import { usePreviewSubscription } from '../lib/sanity'
import { getClient } from '../lib/sanity.server'
import {
  buildInternalUrl,
  filterDataToSingleItem,
  formatPhoneNumber,
  urlFor,
} from '../utils/helpers'
import { groq } from 'next-sanity'
import ExitPreviewLink from '../components/ExitPreviewLink'
import { NextSeo } from 'next-seo'

const FrameStyled = styled.div`
  max-width: 484px;
`

const Book = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.bookPageQuery, {
    initialData: data?.bookPage,
    enabled: preview,
  })

  const page = filterDataToSingleItem(previewData, preview)

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <PageWrapper footerDark>
        {page.metaTags && (
          <NextSeo
            title={page.metaTags.title}
            titleTemplate="%s | Iteam"
            description={page.metaTags?.description}
            image={urlFor(page.metaTags?.imageWithAlt?.asset._ref)}
            openGraph={{
              title: page.metaTags?.title,
              description: page.metaTags?.description,
              images: [
                {
                  url: urlFor(page.metaTags?.imageWithAlt?.asset._ref),
                },
              ],
              site_name: 'Iteam',
            }}
            twitter={{
              title: page.metaTags?.title,
              description: page.metaTags?.description,
              image: urlFor(page.metaTags?.imageWithAlt?.asset._ref),
              handle: '@iteam1337',
              site: '@iteam1337',
              cardType: 'summary_large_image',
            }}
          />
        )}
        {preview && <ExitPreviewLink />}
        <Hero content={page?.hero && page.hero} />
        <Section>
          <Container>
            <Row>
              <Col lg="5">
                <form
                  id="form"
                  name="contact1"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className="tw-mb-2"
                >
                  {/* You still need to add the hidden input with the form name to your JSX form */}
                  <input type="hidden" name="form-name" value="contact1" />
                  <Box mb={5}>
                    <Typography.H2>{page?.title && page.title}</Typography.H2>
                  </Box>
                  <FrameStyled
                    className="meetings-iframe-container"
                    data-src="https://meetings.hubspot.com/jonna-hjern/intromote-iteam?embed=true"
                  ></FrameStyled>
                </form>
              </Col>
              <Col lg={6} className="offset-lg-1 order-lg-2 mt-lg-0">
                <Box className="tw-mb-6">
                  <Typography.H2>
                    {page?.call?.title && page.call.title}
                  </Typography.H2>
                  {page?.call?.contactPersons &&
                    page.call.contactPersons.map((contact, index) => (
                      <div className="tw-mb-6">
                        <Typography.H3 key={index}>
                          {contact.fullname}, {contact.role}
                        </Typography.H3>
                        <Typography.Paragraph>
                          <Typography.Anchor
                            href={`callto:${contact.phoneNumber}`}
                          >
                            {formatPhoneNumber(contact.phoneNumber)}
                          </Typography.Anchor>
                        </Typography.Paragraph>
                      </div>
                    ))}
                  <Typography.Paragraph>
                    <Typography.Anchor
                      href={`${buildInternalUrl(
                        page?.call?.cta?.reference && page.call.cta.reference
                      )}#medarbetare`}
                    >
                      {page?.call?.cta?.title && page.call.cta.title}
                    </Typography.Anchor>
                  </Typography.Paragraph>
                </Box>
                <Box className="tw-mb-6">
                  <Typography.H3>
                    {page?.mail?.title && page.mail.title}
                  </Typography.H3>
                  {page?.mail?.emails &&
                    page.mail.emails.map((email, index) => (
                      <Typography.Paragraph key={index}>
                        <Typography.Anchor href={`mailto:${email}`}>
                          {email}
                        </Typography.Anchor>
                      </Typography.Paragraph>
                    ))}
                </Box>
                {page?.visit?.address &&
                  page.visit.address.map((item, index) => (
                    <Box className="tw-mb-6" key={index}>
                      <Typography.H3>{item.title}</Typography.H3>
                      <Typography.BlockContent
                        blocks={item.blockText.blockText}
                      />
                    </Box>
                  ))}
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  )
}

const bookPageQuery = groq`
*[_type == 'bookPage'] {
  ...,
 blockText {
    blockText []{
     ...,
     markDefs[]{
       ...,
       _type == "internalLink" => {
         reference-> {
           _type,
           slug {
             current
           }
         }
       }
     }
   }
  },
  call {
    ...,
    cta {
      title,
      reference -> {
        _type,
        slug {
          current,
        }
      }
    },
    contactPersons[] -> {
      fullname,
      phoneNumber,
      role,
    } 
  }
}`

export async function getStaticProps({ preview = false }) {
  const bookPage = await getClient(preview).fetch(bookPageQuery)
  if (!bookPage) return { notFound: true }
  return {
    props: {
      preview,
      data: { bookPage, bookPageQuery },
    },
  }
}
export default Book
