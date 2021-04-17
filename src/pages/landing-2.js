import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing2/Hero";
import Feature1 from "../sections/landing2/Feature1";
import Content1 from "../sections/landing2/Content1";
import Feature2 from "../sections/landing2/Feature2";
import Content2 from "../sections/landing2/Content2";
import Testimonial from "../sections/landing2/Testimonial";
import CTA from "../sections/landing2/CTA";

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
