import React from "react";
import Hero from "../sections/iteam-scale-up/Hero";
import VideoCTA from "../sections/iteam-scale-up/VideoCTA";
import Feature from "../sections/iteam-scale-up/Feature";
import Content1 from "../sections/iteam-scale-up/Content1";
import Content2 from "../sections/iteam-scale-up/Content2";
import Content3 from "../sections/iteam-scale-up/Content3";
import FAQ from "../sections/iteam-scale-up/FAQ";
import CTA from "../sections/iteam-scale-up/CTA";

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
