import React from 'react'

import { Box, Typography } from '../../components/Core'

const CardSidebar = ({ children, ...rest }) => (
  <Box
    borderRadius="10px"
    border="1px solid #eae9f2"
    mb="30px"
    mt="-15px"
    p="25px"
    {...rest}
  >
    {children}
  </Box>
)

const Block = ({ children, ...rest }) => (
  <Box pt="20px" {...rest}>
    {children}
  </Box>
)

const TitleSidebar = ({ children }) => (
  <Typography.H2 className="tw-mb-6 tw-text-2xl">{children}</Typography.H2>
)

const TitlePost = ({ link = '/', children }) => (
  <Typography.H3 className="tw-text-base">
    <Typography.Anchor className="tw-text-base tw-font-bold" href={link}>
      {children}
    </Typography.Anchor>
  </Typography.H3>
)

const Date = ({ children }) => (
  <Typography.Caption>{children}</Typography.Caption>
)

export const Sidebar = ({ posts }) => {
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
