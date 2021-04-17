import React from "react";
import Hero from "../sections/landing3/Hero";
import VideoCTA from "../sections/landing3/VideoCTA";
import Feature from "../sections/landing3/Feature";
import Content1 from "../sections/landing3/Content1";
import Content2 from "../sections/landing3/Content2";
import Content3 from "../sections/landing3/Content3";
import FAQ from "../sections/landing3/FAQ";
import CTA from "../sections/landing3/CTA";

import PageWrapper from "../components/PageWrapper";

const LandingPage3 = () => {
  return (
    <>
      <PageWrapper headerDark footerDark>
        <Hero />
        <VideoCTA />
        <Feature />
        <Content1 />
        <Content2 />
        <Content3 />
        <FAQ />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default LandingPage3;
