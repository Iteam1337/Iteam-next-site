import React from "react";
import PageWrapper from "../../components/PageWrapper";
import Medarbetare from "../../sections/about/Medarbetare";
import Hero from "../../sections/common/Hero";
import { useRouter } from "next/router";
import team from "../../sections/about/team.json";

const Coworker = () => {
  const { query } = useRouter();
  const medarbetare = team.filter(
    (t) => t.fullname.toLowerCase() === query.name
  )[0];

  return (
    <PageWrapper footerDark>
      {medarbetare && (
        <>
          <Hero title={medarbetare.fullname}>{medarbetare.title}</Hero>
          <Medarbetare info={medarbetare} />
        </>
      )}
    </PageWrapper>
  );
};

export default Coworker;
