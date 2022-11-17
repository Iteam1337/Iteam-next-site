import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { groq } from 'next-sanity'
import { NextSeo } from 'next-seo'

import { PageWrapper } from '../../components/PageWrapper'
import { Section, Typography } from '../../components/Core'
import { CaseList, CaseFooter, CTA } from '../../features/Case'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import { filterDataToSingleItem } from '../../utils/helpers'
import { ExitPreviewLink } from '../../components/ExitPreviewLink'
import { urlFor } from '../../utils/helpers'
import { Container } from '../../components/Layout'

const CaseStudy = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.casePageQuery, {
    initialData: data?.page,
    enabled: preview,
  })

  const casePage = filterDataToSingleItem(previewData, preview)

  const sectionCards = [
    casePage?.sectionWithImageOne,
    casePage?.sectionWithImageTwo,
  ]

  const { metaTags, title, subTitle, titleWithCTA } = casePage
  return (
    <>
      <PageWrapper footerDark>
        {preview && <ExitPreviewLink />}
        {metaTags && (
          <NextSeo
            title={metaTags.title}
            titleTemplate="%s | Iteam"
            description={metaTags?.description}
            image={urlFor(metaTags?.imageWithAlt?.asset._ref)}
            openGraph={{
              title: metaTags?.title,
              description: metaTags?.description,
              images: [
                {
                  url: urlFor(metaTags?.imageWithAlt?.asset._ref),
                },
              ],
              site_name: 'Iteam',
            }}
            twitter={{
              title: metaTags?.title,
              description: metaTags?.description,
              image: urlFor(metaTags?.imageWithAlt?.asset._ref),
              handle: '@iteam1337',
              site: '@iteam1337',
              cardType: 'summary_large_image',
            }}
          />
        )}
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="6">
                <Typography.H1>{title && title}</Typography.H1>
                <Typography.Paragraph>
                  {subTitle && subTitle}
                </Typography.Paragraph>
              </Col>
            </Row>
          </Container>
        </Section>
        <CaseList posts={data?.casePosts && data?.casePosts} />
        <CaseFooter sectionCards={sectionCards && sectionCards} />
        <CTA text={titleWithCTA && titleWithCTA} />
      </PageWrapper>
    </>
  )
}

const casePageQuery = groq`
  *[_type == 'casePage'] {
  ...,
  metaTags,
  titleWithCTA {
    ...,
  	cta {
      ...,
  		reference-> {
        _type,
        slug {
          current
        }
      }
    }
  }
  }`

const casePostsQuery = groq`
  *[_type == 'casePost'&& !(_id in path('drafts.**'))] | order(_createdAt desc)
  {
    ...,
  }`

export async function getStaticProps({ preview = false }) {
  const page = await getClient(preview).fetch(casePageQuery)
  const casePosts = await getClient(preview).fetch(casePostsQuery)

  if (!casePosts) return { notFound: true }

  return {
    props: {
      preview,
      data: { casePosts, page, casePageQuery },
    },
  }
}

export default CaseStudy
