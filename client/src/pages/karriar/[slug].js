import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import MetaTags from "../../components/MetaTags/MetaTags"
import PageWrapper from "../../components/PageWrapper"
import { Section, Title, Box } from "../../components/Core"
import { groq } from "next-sanity"
import client from "../../sanity-client"
import BlockContent from "../../components/BlockContent"
import { urlFor } from "../../utils/helpers"

const OpeningDetails = ({ openPosition }) => {
  const { title, blockText, metaTags } = openPosition
  return (
    <PageWrapper footerDark>
      <MetaTags
        title={metaTags.title}
        description={metaTags.description}
        image={urlFor(metaTags.imageWithAlt.asset._ref)}
      />
      <Section className="pb-0">
        <div className="pt-5"></div>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <Box className="text-center" mb={4}>
                Ledig tjänst
              </Box>
              <Title variant="hero">{title}</Title>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section className="position-relative" borderBottom="1px solid #eae9f2;">
        <Container>
          <Row>
            <Col lg="12" xl="10" className="offset-xl-1">
              <BlockContent variant="thin" blocks={blockText.blockText} />
            </Col>
          </Row>
        </Container>
      </Section>
    </PageWrapper>
  )
}

const openPositionsQuery = groq`
  *[_type == 'openPositions'] {
    ...,
   }
`

const openPositionQuery = groq`
    *[_type == "openPositions" && slug.current == $slug][0] {
    ...,
    }
`

export async function getStaticProps(context) {
  const openPosition = await client.fetch(openPositionQuery, {
    slug: context.params.slug,
  })

  return {
    props: {
      openPosition,
    },
  }
}

export const getStaticPaths = async () => {
  const pages = (await client.fetch(openPositionsQuery)) || []
  const paths = pages.map((page) => ({
    params: { slug: page.slug.current },
  }))
  return { paths, fallback: false }
}

export default OpeningDetails
