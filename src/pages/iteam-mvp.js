import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/iteam-mvp/Hero";
import Feature1 from "../sections/iteam-mvp/Feature1";
import Content1 from "../sections/iteam-mvp/Content1";
import Feature2 from "../sections/iteam-mvp/Feature2";
import Content2 from "../sections/iteam-mvp/Content2";
import Testimonial from "../sections/iteam-mvp/Testimonial";
import CTA from "../sections/iteam-mvp/CTA";

const LandingPage2 = () => {
  return (
    <>
      <PageWrapper headerDark>
        <Hero />
        <Feature1 />
        <Content1 />
        <Feature2 />
        <Content2 />
        <Testimonial />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default LandingPage2;
