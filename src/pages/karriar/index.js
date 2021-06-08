import React from "react";

import PageWrapper from "../../components/PageWrapper";
import Hero from "../../sections/karriar/Hero";
import Content from "../../sections/karriar/Content";
import Feature from "../../sections/karriar/Feature";
import Roles from "../../sections/karriar/Roles";

const Career = () => {
  return (
    <>
      <PageWrapper headerDark footerDark>
        <Hero title="Kom in i värmen">
          Vi söker dig som älskar att lära nytt och att lösa komplexa problem
          med digitala lösningar som skapar värde på riktigt.
        </Hero>
        <Content />
        <Feature />
        <Roles />
      </PageWrapper>
    </>
  );
};
export default Career;
