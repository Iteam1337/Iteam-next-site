import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing8/Hero";
import Content1 from "../sections/landing8/Content1";
import Feature from "../sections/landing8/Feature";
import Content2 from "../sections/landing8/Content2";
import Content3 from "../sections/landing8/Content3";
import Testimonial from "../sections/landing8/Testimonial";
import CTA from "../sections/landing8/CTA";

const LandingPage2 = () => {
  return (
    <>
      <PageWrapper headerDark>
        <Hero />
        <Content1 />
        <Feature />
        <Content2 />
        <Content3 />
        <Testimonial />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default LandingPage2;
