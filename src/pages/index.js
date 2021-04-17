import React from "react";
import Hero from "../sections/landing4/Hero";
import Feature from "../sections/landing4/Feature";
import Clients from "../sections/landing4/Clients";
import Content1 from "../sections/landing4/Content1";
import Content2 from "../sections/landing4/Content2";
import Testimonial from "../sections/landing4/Testimonial";
import Fact from "../sections/landing4/Fact";
import Pricing from "../sections/landing4/Pricing";
import Faq from "../sections/landing4/Faq";
import CTA from "../sections/landing4/CTA";
import PageWrapper from "../components/PageWrapper";

const LandingPage4 = () => {
  return (
    <>
      <PageWrapper headerDark footerDark>
        <Hero />
        <Feature />
        <Clients />
        <Content1 />
        <Content2 />
        <Testimonial />
        <Fact />
        <Pricing />
        <Faq />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default LandingPage4;
