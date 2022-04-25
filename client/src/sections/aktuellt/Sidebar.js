import React from 'react'

import {
  CardSidebar,
  Block,
  TitleSidebar,
  TitlePost,
  Date,
} from '../../components/Sidebar'

const Sidebar = ({ posts }) => {
  const sortedPosts = posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
  return (
    <>
      <CardSidebar>
        <TitleSidebar>Aktuellt</TitleSidebar>
        {sortedPosts?.map((post, i) => (
          <Block key={i}>
            <TitlePost link={`/aktuellt/${post.slug.current}`}>
              {post.title}
            </TitlePost>
            <Date>{post.date}</Date>
          </Block>
        ))}
      </CardSidebar>
    </>
  )
}
export default Sidebar
