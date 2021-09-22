import React from "react"
import PageWrapper from "../../components/PageWrapper"
import Medarbetare from "../../sections/about/Medarbetare"
import Hero from "../../sections/about/CoworkerHero"
import sanityClient from "../../sanity-client"

const CoworkerPage = ({ coworker }) => {
  const { fullname, heroImage, role, ...rest } = coworker

  return (
    <PageWrapper footerDark>
      {coworker && (
        <>
          <Hero title={fullname} heroImage={heroImage}>
            {role}
          </Hero>
          <Medarbetare info={rest} />
        </>
      )}
    </PageWrapper>
  )
}

CoworkerPage.getInitialProps = async () => ({
  coworker: await sanityClient.fetch(`
  *[_type == 'coworker'][0] {
    ...
   }
  `),
})

export default CoworkerPage
