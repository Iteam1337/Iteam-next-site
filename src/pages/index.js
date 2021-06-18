import React from "react"
import Hero from "../sections/startpage/Hero"
import Feature from "../sections/startpage/Feature"
import Clients from "../sections/startpage/Clients"
import Content1 from "../sections/startpage/Content1"
import Content2 from "../sections/startpage/Content2"
import Offerings from "../sections/startpage/Offerings"
import DesignatedTeam from "../sections/mvp/DesignatedTeam"
import Testimonial from "../sections/startpage/Testimonial"
import Fact from "../sections/startpage/Fact"
import Pricing from "../sections/startpage/Pricing"
import Faq from "../sections/startpage/Faq"
import CTA from "../sections/startpage/CTA"
import PageWrapper from "../components/PageWrapper"

const LandingPage4 = () => {
  return (
    <>
      <PageWrapper headerDark footerDark>
        <Hero />
        <Feature />
        <Content1 />
        <DesignatedTeam />
        <Content2 />
        <Offerings />
        <Testimonial />
        {/* <Fact /> */}
        <Clients />
        <Pricing />
        <Faq />
        <CTA />
      </PageWrapper>
    </>
  )
}
export default LandingPage4
