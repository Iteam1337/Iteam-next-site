import React from "react";

import {
  CardSidebar,
  Block,
  TitleSidebar,
  TitlePost,
  Date,
} from "../../components/Sidebar";

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
      {/*
      <CardSidebar>
        <TitleSidebar mb="28px">Categories</TitleSidebar>
        <CatList>
          <CatListItem post={30}>Technology</CatListItem>
          <CatListItem post={20}>Freelancing</CatListItem>
          <CatListItem post={16}>Writing</CatListItem>
          <CatListItem post={11}>Marketing</CatListItem>
          <CatListItem post={25}>Business</CatListItem>
          <CatListItem post={13} className="mb-0">
            Education
          </CatListItem>
        </CatList>
      </CardSidebar>
     */}
    </>
  );
};
export default Sidebar;
