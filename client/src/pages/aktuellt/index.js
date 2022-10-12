import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PageWrapper from '../../components/PageWrapper'
import { Section, Typography } from '../../components/Core'
import BlogList from '../../sections/aktuellt/BlogList'
import { groq } from 'next-sanity'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import { filterDataToSingleItem, urlFor } from '../../utils/helpers'
import ExitPreviewLink from '../../components/ExitPreviewLink'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export default function BlogRegular({ query, data, preview = false }) {
  const router = useRouter()
  const { data: previewData } = usePreviewSubscription(data?.newsPageQuery, {
    initialData: data?.newsPage,
    enabled: preview,
  })

  const newsPage = filterDataToSingleItem(previewData, preview)
  const filters = {
    alla: (type) => type == 'newsPost' || type == 'openSourceLesson',
    blogg: (type) => type == 'newsPost',
    'open-source-skolan': (type) => type == 'openSourceLesson',
  }
  const filterParam = router?.query?.taggat || 'alla'
  const contentFilter = filters[filterParam] || filters['alla']

  const filteredPosts = data.posts.filter((post) => contentFilter(post._type))

  const sortedPosts = filteredPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })

  const mixedPosts = data.posts.find((post) => post._type !== 'newsPost')

  const { metaTags, title } = newsPage

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
              <Typography.H1 className="pb-4">{title && title}</Typography.H1>
              <Typography.H2 className="tw-sr-only">
                {(filterParam == 'alla' && 'Allt') ||
                  (filterParam == 'blogg' && 'Blogg') ||
                  (filterParam == 'open-source-skolan' && 'Open Source Skolan')}
              </Typography.H2>
              {mixedPosts && (
                <Col lg="8">
                  <Typography.Anchor
                    className={clsx(
                      'tw-mx-6 tw-text-sm hover:tw-underline',
                      filterParam == 'alla' ? 'tw-underline' : 'tw-no-underline'
                    )}
                    href="/aktuellt"
                  >
                    Allt
                  </Typography.Anchor>
                  <Typography.Anchor
                    className={clsx(
                      'tw-mx-6 tw-text-sm hover:tw-underline',
                      filterParam == 'blogg'
                        ? 'tw-underline'
                        : 'tw-no-underline'
                    )}
                    href="/aktuellt?taggat=blogg"
                  >
                    Blogg
                  </Typography.Anchor>
                  <Typography.Anchor
                    className={clsx(
                      'tw-mx-6 tw-text-sm hover:tw-underline',
                      filterParam == 'open-source-skolan'
                        ? 'tw-underline'
                        : 'tw-no-underline'
                    )}
                    href="/aktuellt?taggat=open-source-skolan"
                  >
                    Open Source skolan
                  </Typography.Anchor>
                </Col>
              )}
            </Row>
          </Container>
        </Section>
        <BlogList posts={sortedPosts && sortedPosts} />
      </PageWrapper>
    </>
  )
}

const newsPageQuery = groq`
  *[_type == 'newsPage'] {
    ...,
  }`

const allPostsQuery = groq`
  *[(_type == 'newsPost' || _type == 'openSourceLesson') && !(_id in path('drafts.**'))] {
    ...,
  }
`

export async function getStaticProps({ preview = false }) {
  const posts = await getClient(preview).fetch(allPostsQuery)
  const newsPage = await getClient(preview).fetch(newsPageQuery)
  if (!posts) return { notFound: true }

  return {
    props: {
      preview,
      data: { posts, newsPage, newsPageQuery },
    },
  }
}
