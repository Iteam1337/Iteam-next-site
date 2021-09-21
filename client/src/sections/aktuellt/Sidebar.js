import React from "react"

import {
  CardSidebar,
  Block,
  TitleSidebar,
  TitlePost,
  Date,
} from "../../components/Sidebar"

const Sidebar = ({ posts }) => {
  return (
    <>
      <CardSidebar>
        <TitleSidebar>Aktuellt</TitleSidebar>
        {posts?.map((post) => (
          <Block>
            <TitlePost link={`/aktuellt/${post.slug.current}`}>{post.title}</TitlePost>
            <Date>{post.date}</Date>
          </Block>
        ))}
      </CardSidebar>
    </>
  )
}
export default Sidebar
