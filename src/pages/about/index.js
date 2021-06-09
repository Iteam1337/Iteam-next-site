import React from "react";

import PageWrapper from "../../components/PageWrapper";
import Hero from "../../sections/common/Hero";
import Content from "../../sections/about/Content";

import Team from "../../sections/about/Team";
import CTA from "../../sections/about/CTA";

const About = () => {
  return (
    <>
      <PageWrapper>
        <Hero title="Skapa värde, ha kul, göra något bra">
          Det är våra värderingar. De lever vi efter varje dag. <br />
          {/* Iteam startades 1995 med drömmen att förändra samhället till något bättre med teknik. 
          Det har vi hållit på med sedan dess.
          För oss betyder det att inte bygga appar för apparnas skull. Vi fixar inte problem som inte behöver fixas. 
          Däremot är världen full av problem som vi kan lösa. Ibland handlar det om att underlätta vardagen för småbarnsföräldrar, ibland om att förändra globala logistiksystem. */}
        </Hero>
        <Content />
        <Team />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default About;
