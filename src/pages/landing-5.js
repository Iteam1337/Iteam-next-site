import React from "react";
import Hero from "../sections/landing5/Hero";
import Testimonial from "../sections/landing5/Testimonial";
import Feature from "../sections/landing5/Feature";
import Content from "../sections/landing5/Content";
import Fact from "../sections/landing5/Fact";
import Reviews from "../sections/landing5/Reviews";
import Author from "../sections/landing5/Author";
import Pricing from "../sections/landing5/Pricing/Pricing";
import Offer from "../sections/landing5/Offer";
import Faq from "../sections/landing5/Faq";
import CTA from "../sections/landing5/CTA";
import PageWrapper from "../components/PageWrapper";

const LandingPage5 = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Testimonial />
        <Feature />
        <Content />
        <Offer />
        <Fact />
        <Reviews />
        <Author />
        <Pricing />
        <Faq />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default LandingPage5;
