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
        <Hero title="Bli en del av teamet">
          Vi söker dig som har talang för att lära dig snabbt och gillar mer komplexa utmaningar.
        </Hero>
        <Content />
        <Feature />
        <Roles />
      </PageWrapper>
    </>
  );
};
export default Career;
