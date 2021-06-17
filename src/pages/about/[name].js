import React from "react"
import PageWrapper from "../../components/PageWrapper"
import Medarbetare from "../../sections/about/Medarbetare"
import Hero from "../../sections/about/CoworkerHero"
import team from "../../sections/about/team.json"

export async function getStaticPaths() {
  const paths = team.map(({ path }) => {
    const name = path.split("/").slice(1)[0]
    return { params: { name } }
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const currentPath = `/about/${params.name}`
  const coworker = team.find((c) => c.path === currentPath) || {
    notFound: true,
  }
  if (coworker.notFound) return coworker
  return { props: { coworker } }
}

const CoworkerPage = ({ coworker }) => {
  return (
    <PageWrapper footerDark>
      {coworker && (
        <>
          <Hero title={coworker.fullname} heroImage={coworker.heroImg}>
            {coworker.title}
          </Hero>
          <Medarbetare info={coworker} />
        </>
      )}
    </PageWrapper>
  )
}

export default CoworkerPage
