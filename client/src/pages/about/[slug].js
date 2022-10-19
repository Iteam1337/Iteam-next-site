import React from 'react'
import { groq } from 'next-sanity'

import { usePreviewSubscription } from '../../lib/sanity'
import PageWrapper from '../../components/PageWrapper'
import { CoworkerHero, Medarbetare } from '../../sections/about'
import { getClient } from '../../lib/sanity.server'
import { filterDataToSingleItem } from '../../utils/helpers'
import ExitPreviewLink from '../../components/ExitPreviewLink'

const CoworkerPage = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.coworkerQuery, {
    params: data?.queryParams ?? {},
    initialData: data?.post,
    enabled: preview,
  })
  const post = filterDataToSingleItem(previewData, preview)

  return (
    <PageWrapper footerDark>
      {preview && <ExitPreviewLink />}
      {post && (
        <>
          <CoworkerHero
            title={post?.fullname ?? post.fullname}
            heroImage={post?.heroImage ?? post.heroImage}
          >
            {post?.role ?? post.role}
          </CoworkerHero>
          <Medarbetare info={post ?? post} />
        </>
      )}
    </PageWrapper>
  )
}

const coworkerQuery = groq`
*[_type == 'coworker' && slug.current == $slug] {
  ...,
 }
`

export async function getStaticProps({ params, preview = false }) {
  const queryParams = { slug: params.slug }
  const data = await getClient(preview).fetch(coworkerQuery, queryParams)

  if (!data) return { notFound: true }

  const post = filterDataToSingleItem(data, preview)

  return {
    props: {
      preview,
      data: { post, coworkerQuery, queryParams },
    },
  }
}

export const getStaticPaths = async () => {
  const query = groq`*[_type == 'coworker' && defined(slug.current)][].slug.current`
  const pages = await getClient().fetch(query)
  return {
    paths: pages.map((slug) => `/about/${slug}`),
    fallback: true,
  }
}

export default CoworkerPage
