import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/mvp/Hero";
import Feature1 from "../sections/mvp/Feature1";
import Content1 from "../sections/mvp/Content1";
import Feature2 from "../sections/mvp/Feature2";
import Content2 from "../sections/mvp/Content2";
import DesignatedTeam from "../sections/mvp/DesignatedTeam";
// import Testimonial from "../sections/mvp/Testimonial";
import ModalVideo from "../components/ModalVideo";
import Testimonial from "../sections/startpage/Testimonial";
import CTA from "../sections/mvp/CTA";

const LandingPage2 = () => {
  return (
    <>
      <PageWrapper >
        <Hero />
        <Feature1 />
        <Content1 />
        <Feature2 />
        <DesignatedTeam />
        <ModalVideo url='https://www.youtube.com/watch?v=Iz-XLYvzXyU'></ModalVideo>
        <Content2 />
        <Testimonial />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default LandingPage2;
