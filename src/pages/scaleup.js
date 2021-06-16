import React from "react"
import PageWrapper from "../components/PageWrapper"
import Hero from "../sections/scaleup/Hero"
import Feature1 from "../sections/scaleup/Feature1"
import Content1 from "../sections/scaleup/Content1"
import UX from "../sections/scaleup/UX"
import Tech from "../sections/scaleup/Tech"
import AgileCoach from "../sections/scaleup/AgileCoach"
import Content2 from "../sections/scaleup/Content2"
import DesignatedTeam from "../sections/scaleup/DesignatedTeam"
// import Testimonial from "../sections/scaleup/Testimonial";
import ModalVideo from "../components/ModalVideo"
import Testimonial from "../sections/startpage/Testimonial"
import Pricing from "../sections/startpage/Pricing"
import CTA from "../sections/scaleup/CTA"
import MetaTags from "../components/MetaTags/MetaTags"

const ScaleUp = () => {
  return (
    <>
      <PageWrapper>
        <MetaTags
          title={"Iteam Scale-Up – När ditt team behöver extra kraft"}
          description={"Ibland behöver man förstärkning"}
        />
        <Hero />
        <Content1 />
        <Feature1 />
        <AgileCoach />
        <DesignatedTeam />
        <Tech />
        <ModalVideo url="https://www.youtube.com/watch?v=Iz-XLYvzXyU"></ModalVideo>
        <Content2 />
        <UX />
        <Testimonial />
        <Pricing />
        <CTA />
      </PageWrapper>
    </>
  )
}
export default ScaleUp
