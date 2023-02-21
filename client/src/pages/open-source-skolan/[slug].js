import { groq } from 'next-sanity'
import { NextSeo } from 'next-seo'
import React from 'react'
import styled from 'styled-components'

import { Box, Section, Span, Typography } from '../../components/Core'
import { ExitPreviewLink } from '../../components/ExitPreviewLink'
import { Container, Flex } from '../../components/Layout'
import { PageWrapper } from '../../components/PageWrapper'
import { BlogList } from '../../features/Aktuellt'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import { filterDataToSingleItem, urlFor } from '../../utils/helpers'

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
`

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`

const LessonDetails = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.lessonQuery, {
    params: data?.queryParams ?? {},
    initialData: data?.lesson,
    enabled: preview,
  })

  const lesson = filterDataToSingleItem(previewData, preview)

  return (
    <>
      {lesson && (
        <NextSeo
          title={lesson?.metaTags?.title ?? lesson.title}
          titleTemplate="%s | Open Source skolan på Iteam"
          description={
            lesson?.metaTags?.description ?? lesson?.imageCard?.description
          }
          image={urlFor(
            lesson?.metaTags?.imageWithAlt?.asset._ref ??
              lesson?.preview?.imageCard?.image.asset._ref
          )}
          openGraph={{
            title: lesson?.metaTags?.title ?? lesson.title,
            description:
              lesson?.metaTags?.description ?? lesson?.imageCard?.description,
            images: [
              {
                url: urlFor(
                  lesson?.metaTags?.imageWithAlt?.asset._ref ??
                    lesson?.preview?.imageCard?.image.asset._ref
                ),
              },
            ],
            site_name: 'Iteam',
          }}
          twitter={{
            title: lesson?.metaTags?.title ?? lesson.title,
            description:
              lesson?.metaTags?.description ?? lesson?.imageCard?.description,
            image: urlFor(
              lesson?.metaTags?.imageWithAlt?.asset._ref ??
                lesson?.preview?.imageCard?.image.asset._ref
            ),
            handle: '@iteam1337',
            site: '@iteam1337',
            cardType: 'summary_large_image',
          }}
        />
      )}
      <PageWrapper footerDark>
        {preview && <ExitPreviewLink />}
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Flex center>
              <div className="tw-w-4/5 tw-text-center">
                <Typography.H1>{lesson?.title && lesson.title}</Typography.H1>
                <Box className="d-flex justify-content-center">
                  <Typography.Paragraph>
                    {lesson?.date && lesson.date}
                  </Typography.Paragraph>
                </Box>
              </div>
            </Flex>
            {lesson?.youtubeId && (
              <>
                <Box mt={56} mb={32}>
                  <VideoContainer>
                    <VideoIframe
                      src={`https://www.youtube.com/embed/${lesson?.youtubeId}`}
                      title={lesson?.metaTags?.title ?? lesson.title}
                      frameborder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </VideoContainer>
                </Box>
                <Box>
                  <Typography.Paragraph>
                    <Span fontWeight="bold">Open Source skolan:</Span>{' '}
                    {lesson?.imageCard?.description &&
                      lesson.imageCard.description}
                  </Typography.Paragraph>
                </Box>
              </>
            )}
          </Container>
        </Section>
        {data?.lessons && (
          <>
            <Section className="pb-0">
              <div className="pt-5"></div>
              <Container>
                <Flex center className="text-center">
                  <div>
                    <Typography.H2>
                      Se fler lektioner i Open Source skolan
                    </Typography.H2>
                  </div>
                </Flex>
              </Container>
            </Section>
            <BlogList posts={data.lessons} />
          </>
        )}
      </PageWrapper>
    </>
  )
}

const lessonsQuery = groq`
  *[_type == 'openSourceLesson' && !(_id in path('drafts.**')) && slug.current != $slug] {
    ...,
   }
`

const lessonQuery = groq`
    *[_type == "openSourceLesson" && slug.current == $slug] {
    ...,
    }
`

export async function getStaticProps({ params, preview = false }) {
  const queryParams = { slug: params.slug }
  const data = await getClient(preview).fetch(lessonQuery, queryParams)
  const lessons = await getClient(preview).fetch(lessonsQuery, queryParams)

  if (!lessons) return { notFound: true }

  const lesson = filterDataToSingleItem(data, preview)

  return {
    props: {
      preview,
      data: { lesson, lessons, lessonQuery, queryParams },
    },
  }
}

export const getStaticPaths = async () => {
  const query = groq`*[_type == 'openSourceLesson' && defined(slug.current)][].slug.current`
  const pages = await getClient().fetch(query)
  return {
    paths: pages.map((slug) => `/open-source-skolan/${slug}`),
    fallback: true,
  }
}

export default LessonDetails
