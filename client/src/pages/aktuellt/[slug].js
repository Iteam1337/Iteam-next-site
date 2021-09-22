import React from "react"
import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap"
import PageWrapper from "../../components/PageWrapper"
import { Section, Title, Text, Box } from "../../components/Core"
import client from './../../../src/sanity-client'

import PostDetails from "../../sections/aktuellt/PostDetails"
import Sidebar from "../../sections/aktuellt/Sidebar"
import BlogList from "../../sections/aktuellt/BlogList"
import { NextSeo } from 'next-seo'

// import { getAllPostIds, getPostData, getSortedPostsData } from "../../lib/posts"
import BlockContent from "../../components/BlockContent"
import Typography from '../../components/Typography'
import { device } from '../../utils'

// // get path
// export async function getStaticPaths() {
//     const paths = getAllPostIds()
//     return {
//         paths,
//         fallback: false,
//     }
// }

// // get data
// export async function getStaticProps({ params }) {
//     const post = await getPostData(params.id)
//     const posts = await getSortedPostsData()
//     return {
//         props: {
//             post,
//             posts,
//         },
//     }
// }



const BlogDetails = ({ post, posts }) => {
    return (
        <>
            <NextSeo
                title={post.title}
                titleTemplate='%s | Aktuellt på Iteam'
                description={post.imageCard.description}
                // image={post.imageCard.image}
                openGraph={{
                    title: post.title,
                    description: post.imageCard.description,
                    // images: [
                    //     {
                    //         url: post.image,
                    //         alt: post.title,
                    //     }
                    // ],
                    site_name: 'Iteam',
                }}
                twitter={{
                    title: post.title,
                    description: post.imageCard.description,
                    // image: post.image,
                    handle: '@iteam1337',
                    site: '@iteam1337',
                    cardType: 'summary_large_image',
                }}
            />
            <PageWrapper footerDark>
                <Section className="pb-0">
                    <div className="pt-5"></div>
                    <Container>
                        <Row className="justify-content-center text-center">
                            <Col lg="12">
                                <Title variant="hero">{post.title}</Title>
                                <Box className="d-flex justify-content-center">
                                    <Text mr={3}>
                                        <p>{post.date}</p>
                                    </Text>
                                    <Text>
                                        {post.tags?.map((tag) => (
                                            <Link href="/">{tag}</Link>
                                        ))}
                                    </Text>
                                    <Text>{post.author && "av " + post.author}</Text>
                                </Box>
                            </Col>
                        </Row>
                    </Container>
                </Section>
                <Section className="pb-0">
                    <Container>
                        <Row>
                            <Col lg="8" className="mb-5">
                                <BlockContent blocks={post.blockText.blockText} />
                            </Col>
                            <Col lg="4" className="" style={{ marginTop: '2.3rem' }}>
                                <Sidebar posts={posts} />
                            </Col>
                        </Row>
                    </Container>
                </Section>
                <BlogList posts={posts} />
            </PageWrapper>
        </>
    )
}

BlogDetails.getInitialProps = async function (context) {
    const { slug = "" } = context.query
    const post = await client.fetch(`
      *[_type == "newsPost" && slug.current == $slug][0]
    `, { slug })

    const posts = await client.fetch(`
    *[_type == "newsPost"]`)

    return { post, posts }
}
export default BlogDetails
