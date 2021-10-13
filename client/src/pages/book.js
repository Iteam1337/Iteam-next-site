import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Title, Section, Box, Text, Anchor } from '../components/Core'
import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/common/Hero'
import { usePreviewSubscription } from '../lib/sanity'
import { getClient } from '../lib/sanity.server'
import {
  buildInternalUrl,
  filterDataToSingleItem,
  formatPhoneNumber,
} from '../utils/helpers'
import { groq } from 'next-sanity'
import BlockContent from '../components/BlockContent'

const FormStyled = styled.form``

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
        <Hero content={page.hero} />
        <Section>
          <Container>
            <Row className="align-items-center">
              <Col lg="5">
                <FormStyled
                  id="form"
                  name="contact1"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  {/* You still need to add the hidden input with the form name to your JSX form */}
                  <input type="hidden" name="form-name" value="contact1" />

                  <Box mb={5}>
                    <Title>{page.title}</Title>
                  </Box>
                  <div
                    className="meetings-iframe-container"
                    data-src="https://meetings.hubspot.com/jonna-hjern/intromote-iteam?embed=true"
                  ></div>
                </FormStyled>
              </Col>
              <Col
                lg={6}
                className="offset-lg-1 order-lg-2 mt-5 mt-lg-0 pt-lg-5"
              >
                <Box className="mb-5">
                  <Title variant="card" fontSize="24px">
                    {page.call.title}
                  </Title>
                  {page.call.contactPersons.map((contact, index) => (
                    <Title variant="card" fontSize="18px" key={index}>
                      {contact.fullname}, {contact.role}
                      <Text>
                        <Anchor
                          color="info"
                          href={`callto:${contact.phoneNumber}`}
                        >
                          {formatPhoneNumber(contact.phoneNumber)}
                        </Anchor>
                      </Text>
                    </Title>
                  ))}
                  <Anchor
                    color="info"
                    href={`${buildInternalUrl(
                      page.call.cta.reference
                    )}#medarbetare`}
                  >
                    {page.call.cta.title}
                  </Anchor>
                </Box>
                <Box className="mb-5">
                  <Title variant="card" fontSize="24px">
                    {page.mail.title}
                  </Title>
                  {page.mail.emails.map((email, index) => (
                    <Text key={index}>
                      <Anchor color="info" href={`mailto:${email}`}>
                        {email}
                      </Anchor>
                    </Text>
                  ))}
                </Box>
                {page.visit.address.map((item, index) => (
                  <Box className="mb-5" key={index}>
                    <Title variant="card" fontSize="24px">
                      {item.title}
                    </Title>
                    <BlockContent blocks={item.blockText.blockText} />
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
*[_id == 'bookPage'] {
  ...,
  blockText{
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

  return {
    props: {
      preview,
      data: { bookPage, bookPageQuery },
    },
  }
}
export default Book
