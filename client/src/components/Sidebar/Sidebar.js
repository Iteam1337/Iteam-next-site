import React from 'react'
import Link from 'next/link'

import { Title, Text, Box, Span, Anchor } from '../Core'

export const CardSidebar = ({ children, ...rest }) => (
  <Box borderRadius="10px" border="1px solid #eae9f2" mb="30px" mt="-15px" p="25px" {...rest}>
    {children}
  </Box>
)

export const Block = ({ children, ...rest }) => (
  <Box pt="20px" {...rest}>
    {children}
  </Box>
)

export const TitleSidebar = ({ children, ...rest }) => (
  <Title variant="card" fontSize="24px" color="black" {...rest}>
    {children}
  </Title>
)

export const TitlePost = ({ link = '/', children, ...rest }) => (
  <Title variant="card" fontSize="16px" mb={0} {...rest}>
    <Anchor href={link}>
       {children}
    </Anchor>
  </Title>
)

export const Date = ({ link = '/', children, ...rest }) => (
  <Text color="lightShade" fontSize="14px" {...rest}>
    {children}
  </Text>
)

export const CatList = ({ children, ...rest }) => (
  <ul
    css={`
      list-style: none;
      margin: 0;
      padding: 0;
    `}
    {...rest}
  >
    {children}
  </ul>
)

export const CatListItem = ({
  link = '/',
  numPosts = 20,
  children,
  ...rest
}) => (
  <li
    {...rest}
    css={`
      margin-bottom: 13px;
    `}
  >
    <Link href={link}>
      <a>
        <Span color="light">{children}</Span>{' '}
        <Span color="lightShade">- {numPosts} Posts</Span>
      </a>
    </Link>
  </li>
)
