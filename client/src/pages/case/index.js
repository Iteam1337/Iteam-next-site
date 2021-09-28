import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import PageWrapper from "../../components/PageWrapper"
import { Section, Title, Text } from "../../components/Core"

import CaseList from "../../sections/case/CaseList1"
import CaseList2 from "../../sections/case/CaseList2"
import CTA from "../../sections/case/CTA"
import client from "../../sanity-client"
import { groq } from "next-sanity"

const CaseStudy = ({ casePage, casePosts }) => {
  const sectionCards = [casePage.sectionWithImageOne, casePage.sectionWithImageTwo]
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="6">
                <Title variant="hero">{casePage.title}</Title>
                <Text>
                  {casePage.subTitle}
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        {/* <CaseList /> */}
        <CaseList2 sectionCards={sectionCards} />
        {/* <CaseList /> */}
        <CTA text={casePage.titleWithCTA} />
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
  *[_type == 'casePost']
  {
  title,
   imageCard,
   slug,
   date
  }`


export async function getStaticProps() {
  const casePage = await client.fetch(casePageQuery)
  const casePosts = await client.fetch(casePostsQuery)
  return {
    props: {
      casePage,
      casePosts
    }
  }
}
export default CaseStudy
