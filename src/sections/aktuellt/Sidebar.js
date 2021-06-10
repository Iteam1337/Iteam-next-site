import React from "react";

import {
  CardSidebar,
  Block,
  TitleSidebar,
  TitlePost,
  Date,
  CatList,
  CatListItem,
} from "../../components/Sidebar";

import InputSearch from "../../components/InputSearch";

const Sidebar = ({ posts }) => {
  return (
    <>
      <CardSidebar>
        <TitleSidebar>Aktuellt</TitleSidebar>
        {posts?.map((post) => (
          <Block>
            <TitlePost link={`/aktuellt/${post.id}`}>{post.title}</TitlePost>
            <Date>{post.date}</Date>
          </Block>
        ))}
      </CardSidebar>
    </>
  );
};
export default Sidebar;
