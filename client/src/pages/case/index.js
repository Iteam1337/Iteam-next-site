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

  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="6">
                <Title variant="hero">
                  {casePage?.title && casePage.title}
                </Title>
                <Text>{casePage?.subTitle && casePage.subTitle}</Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <CaseList posts={data?.casePosts && data.casePosts} />
        <CaseList2 sectionCards={sectionCards && sectionCards} />
        <CTA text={casePage?.titleWithCTA && casePage.titleWithCTA} />
      </PageWrapper>
    </>
  )
}

const casePageQuery = groq`
  *[_type == 'casePage' && !(_id in path('drafts.**'))][1] 
  {
  ...,
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
