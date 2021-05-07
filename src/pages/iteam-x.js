import React from "react";
import Hero from "../sections/iteam-x/Hero";
import Fact from "../sections/iteam-x/Fact";
import Content from "../sections/iteam-x/Content";
import CaseStudies from "../sections/iteam-x/CaseStudies";
import Reviews from "../sections/iteam-x/Reviews";
import Contact from "../sections/iteam-x/Contact";

import PageWrapper from "../components/PageWrapper";

const IteamX = () => {
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
export default IteamX;
