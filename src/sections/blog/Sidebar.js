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

const Sidebar = () => {
  return (
    <>
      <CardSidebar p="15px" pl="20px">
        <form>
          <InputSearch />
        </form>
      </CardSidebar>
      <CardSidebar>
        <TitleSidebar>Recent Posts</TitleSidebar>
        <Block>
          <TitlePost>
            How To Blow Through Capital At An Incredible Rate
          </TitlePost>
          <Date>Jan 14, 2020</Date>
        </Block>
        <Block>
          <TitlePost>Design Studios That Everyone Should Know About?</TitlePost>
          <Date>Jan 14, 2020</Date>
        </Block>
        <Block>
          <TitlePost>
            How did we get 1M+ visitors in 30 days without anything!
          </TitlePost>
          <Date>Jan 14, 2020</Date>
        </Block>
        <Block borderBottom="none" pb="0">
          <TitlePost>
            Figma On Figma: How We Built Our Website Design System
          </TitlePost>
          <Date>Jan 14, 2020</Date>
        </Block>
      </CardSidebar>
      <CardSidebar>
        <TitleSidebar>Popular Posts</TitleSidebar>
        <Block>
          <TitlePost>
            How To Blow Through Capital At An Incredible Rate
          </TitlePost>
          <Date>Jan 14, 2020</Date>
        </Block>
        <Block>
          <TitlePost>Design Studios That Everyone Should Know About?</TitlePost>
          <Date>Jan 14, 2020</Date>
        </Block>
        <Block>
          <TitlePost>
            How did we get 1M+ visitors in 30 days without anything!
          </TitlePost>
          <Date>Jan 14, 2020</Date>
        </Block>
        <Block borderBottom="none" pb="0">
          <TitlePost>
            Figma On Figma: How We Built Our Website Design System
          </TitlePost>
          <Date>Jan 14, 2020</Date>
        </Block>
      </CardSidebar>
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
    </>
  );
};
export default Sidebar;
