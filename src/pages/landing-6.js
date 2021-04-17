import React from "react";
import Hero from "../sections/landing6/Hero";
import Reviews from "../sections/landing6/Reviews";
import Content1 from "../sections/landing6/Content1";
import Content2 from "../sections/landing6/Content2";
import Content3 from "../sections/landing6/Content3";
import VideoCTA from "../sections/landing6/VideoCTA";
import CTA from "../sections/landing6/CTA";

import PageWrapper from "../components/PageWrapper";

const LandingPage6 = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Reviews />
        <Content1 />
        <Content2 />
        <Content3 />
        <VideoCTA />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default LandingPage6;
