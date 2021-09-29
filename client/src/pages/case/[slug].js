import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import PageWrapper from "../../components/PageWrapper"
import { Section, Title, Text, Box } from "../../components/Core"
import { groq } from "next-sanity"
import client from "../../sanity-client"
import BlockContent from "../../components/BlockContent"
import MetaTags from "../../components/MetaTags/MetaTags"
import CaseList from "../../sections/case/CaseList1"
import CTA from "../../sections/case/CTA"

const BlogDetails = ({ post, posts, casePage }) => {
    return (
        <PageWrapper footerDark>
            <MetaTags
                title={" Sveriges Allmännytta"}
                description={
                    "Tryggare boendemiljö med automatisk spårning av olaglig andrahandsuthyrning"
                }
            />
            <Section className="pb-0">
                <div className="pt-5"></div>
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg="8">
                            <Box className="text-center" mb={4}>
                                {post.company}
                            </Box>
                            <Title variant="hero">{post.title}</Title>
                            <Text>
                                {post.subtitle && post.subtitle}
                            </Text>
                        </Col>
                    </Row>
                </Container>
            </Section>
            <Section className="position-relative" borderBottom="1px solid #eae9f2;">
                <Container>
                    <Row>
                        <Col lg="12" xl="10" className="offset-xl-1">
                            <Box pb={["40px", null, "65px"]}>

                                <BlockContent variant='thin' blocks={post.blockText.blockText} />
                            </Box>

                        </Col>
                    </Row>
                </Container>
            </Section>
            <CaseList posts={posts} />
            <CTA text={casePage.titleWithCTA} />
        </PageWrapper>
    )
}

const casePostsQuery = groq`
  *[_type == 'casePost' && !(_id in path('drafts.**'))] {
    slug,
    preview
   }
`

const casePostQuery = groq`
    *[_type == "casePost" && slug.current == $slug][0] {
    blockText,
    company,
    title,
    subtitle
    }
`

const casePageQuery = groq`
  *[_type == 'casePage' && !(_id in path('drafts.**'))][1] 
  {
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

export async function getStaticProps(context) {
    const casePost = await client.fetch(casePostQuery, {
        slug: context.params.slug,
    })
    const casePosts = await client.fetch(casePostsQuery)
    const casePage = await client.fetch(casePageQuery)

    return {
        props: {
            post: casePost,
            posts: casePosts,
            casePage
        },
    }
}

export const getStaticPaths = async () => {
    const pages = (await client.fetch(casePostsQuery)) || []
    const paths = pages.map((page) => ({
        params: { slug: page.slug.current },
    }))
    return { paths, fallback: false }
}


export default BlogDetails
