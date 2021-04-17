import React from "react";
import Hero from "../sections/landing7/Hero";
import Fact from "../sections/landing7/Fact";
import Content from "../sections/landing7/Content";
import CaseStudies from "../sections/landing7/CaseStudies";
import Reviews from "../sections/landing7/Reviews";
import Contact from "../sections/landing7/Contact";

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
