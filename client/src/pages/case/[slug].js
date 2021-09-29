import React from "react"
import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap"
import PageWrapper from "../../components/PageWrapper"
import { Section, Title, Text, Box } from "../../components/Core"
import { groq } from "next-sanity"
import client from "../../sanity-client"

import PostDetails from "../../sections/aktuellt/PostDetails"
import Sidebar from "../../sections/aktuellt/Sidebar"
import BlogList from "../../sections/aktuellt/BlogList"
import { NextSeo } from 'next-seo'

import BlockContent from "../../components/BlockContent"
import Typography from '../../components/Typography'
import { device } from '../../utils'
import { urlFor } from "../../utils/helpers"

const BlogDetails = ({ post, posts }) => {
    return (
        <>
            <NextSeo
                title={post.title}
                titleTemplate='%s | Aktuellt på Iteam'
                description={post.imageCard.description}
                image={urlFor(post.imageCard.image.asset._ref)}
                openGraph={{
                    title: post.title,
                    description: post.imageCard.description,
                    images: [
                        {
                            url: urlFor(post.imageCard.image.asset._ref),
                            alt: post.imageCard.image.alt,
                        }
                    ],
                    site_name: 'Iteam',
                }}
                twitter={{
                    title: post.title,
                    description: post.imageCard.description,
                    image: urlFor(post.imageCard.image.asset._ref),
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

const casePostsQuery = groq`
  *[_type == 'casePost' && !(_id in path('drafts.**'))] {
    ...,
   }
`

const casePostQuery = groq`
    *[_type == "casePost" && slug.current == $slug][0] {
    ...,
    }
`

export async function getStaticProps(context) {
    const casePost = await client.fetch(casePostQuery, {
        slug: context.params.slug,
    })
    const casePosts = await client.fetch(casePostsQuery)

    return {
        props: {
            post: casePost,
            posts: casePosts
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
