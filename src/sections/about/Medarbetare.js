import React from "react";
import { useRouter } from "next/router";

import team from "./team.json";
const Medarbetare = () => {
  const { query } = useRouter();
  console.log(query.id);
  const medarbetare = team.filter((t) => t.name === query.id);
  console.log(medarbetare);

  return <div></div>;
};

export default Medarbetare;
