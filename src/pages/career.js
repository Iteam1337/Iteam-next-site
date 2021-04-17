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
        <Hero title="Career">
          Create custom landing pages with Omega that converts more visitors
          than any website.
        </Hero>
        <Content />
        <Feature />
        <Roles />
      </PageWrapper>
    </>
  );
};
export default Career;
