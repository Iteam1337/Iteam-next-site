import React from "react";
import Hero from "../sections/whitepaper/Hero";
import Feature from "../sections/whitepaper/Feature";
import Content from "../sections/whitepaper/Content";
import Fact from "../sections/whitepaper/Fact";
import Author from "../sections/whitepaper/Author";
import Pricing from "../sections/whitepaper/Pricing/Pricing";
import Offer from "../sections/whitepaper/Offer";
import Faq from "../sections/whitepaper/Faq";
import CTA from "../sections/whitepaper/CTA";
import PageWrapper from "../components/PageWrapper";

const LandingPage5 = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Feature />
        <Content />
        <Offer />
        <Fact />
        <Author />
        <Pricing />
        <Faq />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default LandingPage5;
