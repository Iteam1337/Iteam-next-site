import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PageWrapper from '../../components/PageWrapper'
import { Section, Title, Text } from '../../components/Core'
import CaseList from '../../sections/case/CaseList1'
import CaseList2 from '../../sections/case/CaseList2'
import CTA from '../../sections/case/CTA'
import { groq } from 'next-sanity'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import { filterDataToSingleItem } from '../../utils/helpers'
import client from '../../sanity-client'
import { NextSeo } from 'next-seo'
import { urlFor } from '../../utils/helpers'

const CaseStudy = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.casePageQuery, {
    initialData: data?.casePage,
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
        {metaTags && (
          <NextSeo
            title={metaTags.title}
            titleTemplate="%s | Aktellt på Iteam"
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
                <Title variant="hero">{title && title}</Title>
                <Text>{subTitle && subTitle}</Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <CaseList posts={data?.casePosts && data.casePosts} />
        <CaseList2 sectionCards={sectionCards && sectionCards} />
        <CTA text={titleWithCTA && titleWithCTA} />
      </PageWrapper>
    </>
  )
}

const casePageQuery = groq`
  *[_type == 'casePage' && !(_id in path('drafts.**'))][1] 
  {
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
  *[_type == 'casePost'&& !(_id in path('drafts.**'))]
  {
  ...,
  }`

export async function getStaticProps({ preview = false }) {
  const casePage = await getClient(preview).fetch(casePageQuery)
  const casePosts = await getClient(preview).fetch(casePostsQuery)

  if (!casePage) return { notFound: true }

  return {
    props: {
      preview,
      data: { casePage, casePosts, casePageQuery },
    },
  }
}

export default CaseStudy
