import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import Medarbetare from '../../sections/about/Medarbetare'
import Hero from '../../sections/about/CoworkerHero'
import { groq } from 'next-sanity'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import { filterDataToSingleItem } from '../../utils/helpers'
import ExitPreviewButton from '../../components/ExitPreviewButton'

const CoworkerPage = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.coworkerQuery, {
    params: data?.queryParams ?? {},
    initialData: data?.post,
    enabled: preview,
  })
  const post = filterDataToSingleItem(previewData, preview)
  const { fullname, heroImage, role, ...rest } = post

  return (
    <PageWrapper footerDark>
      {preview && <ExitPreviewButton />}
      {post && (
        <>
          <Hero title={fullname} heroImage={heroImage}>
            {role}
          </Hero>
          <Medarbetare info={rest} fullname={fullname} />
        </>
      )}
    </PageWrapper>
  )
}

const coworkerQuery = groq`
*[_type == 'coworker' && slug.current == $slug][0] {
  ...,
 }
`

export async function getStaticProps({ params, preview = false }) {
  const queryParams = { slug: params.name }
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
  const query = groq`*[_type == 'casePost' && defined(slug.current)][].slug.current`
  const pages = await getClient().fetch(query)
  return {
    paths: pages.map((slug) => `/about/${slug}`),
    fallback: true,
  }
}

export default CoworkerPage
