import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Content from "../sections/about/Content";
import Team from "../sections/about/Team";
import CTA from "../sections/about/CTA";

const About = () => {
  return (
    <>
      <PageWrapper>
        <Hero title="Skapa värde, ha kul, gör något bra">
          Det är våra värderingar. De lever vi efter varje dag. Iteam startades 1995 med drömmen att förändra samhället till något bättre med teknik. Det har vi hållit på med sedan dess.
        </Hero>
        <Content />
        <Team />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default About;
