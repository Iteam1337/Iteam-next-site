import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Content from "../sections/career/Content";
import Feature from "../sections/career/Feature";
import Roles from "../sections/career/Roles";

const Career = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero title="Kom in i värmen">
          Vi söker dig som älskar att lära nytt och att lösa komplexa problem med digitala lösningar som skapar värde på riktigt.
        </Hero>
        <Content />
        <Feature />
        <Roles />
      </PageWrapper>
    </>
  );
};
export default Career;
