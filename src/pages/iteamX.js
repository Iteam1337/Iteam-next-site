import React from "react";
import Hero from "../sections/iteamX/Hero";
import Fact from "../sections/iteamX/Fact";
import Content from "../sections/iteamX/Content";
import CaseStudies from "../sections/iteamX/CaseStudies";
import Reviews from "../sections/iteamX/Reviews";
import Contact from "../sections/iteamX/Contact";

import PageWrapper from "../components/PageWrapper";

const LandingPage7 = () => {
  return (
    <>
      <PageWrapper headerDark footerDark>
        <Hero />
        <Fact />
        <Content />
        <CaseStudies />
        <Reviews />
        <Contact />
      </PageWrapper>
    </>
  );
};
export default LandingPage7;
