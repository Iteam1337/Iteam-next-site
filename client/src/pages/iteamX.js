import React from "react"
import Hero from "../sections/iteamX/Hero"
import Fact from "../sections/iteamX/Fact"
import Content from "../sections/iteamX/Content"
import Content2 from "../sections/iteamX/Content2"
import Feature1 from "../sections/iteamX/Feature1"
import CaseStudies from "../sections/iteamX/CaseStudies"
import Reviews from "../sections/iteamX/Reviews"
import Contact from "../sections/iteamX/Contact"
import MetaTags from "../components/MetaTags/MetaTags"

import PageWrapper from "../components/PageWrapper"

const IteamX = () => {
  return (
    <>
      <PageWrapper headerDark footerDark>
        <MetaTags
          title={"Iteam X - när du inte vet vad som är möjligt"}
          description={"Experimentell utveckling med exponentiell teknik."}
        />
        <Hero />
        <Fact />
        <Content />
        <Content2 />
        <Feature1 />
        <CaseStudies />
        <Reviews />
        <Contact />
      </PageWrapper>
    </>
  )
}
export default IteamX
