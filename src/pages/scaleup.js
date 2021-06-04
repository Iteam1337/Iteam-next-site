import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/scaleup/Hero";
import Feature1 from "../sections/scaleup/Feature1";
import Content1 from "../sections/scaleup/Content1";
import Feature2 from "../sections/mvp/Feature2";
import Content2 from "../sections/scaleup/Content2";
import Content3 from "../sections/scaleup/Content3";
import Content4 from "../sections/scaleup/Content4";
// import Testimonial from "../sections/scaleup/Testimonial";
import Testimonial from "../sections/startpage/Testimonial";
import CTA from "../sections/scaleup/CTA";

const Pricing2 = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        {/* <Feature1 /> */}
        <Content1 />
        <Content2 />
        <Content4 />
        <Content3 />
        <Feature2 />
        <Testimonial />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default Pricing2;
