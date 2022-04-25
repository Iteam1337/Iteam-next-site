import React from 'react'
import Link from 'next/link'

import { Title, Text, Box, Span } from '../Core'

export const CardSidebar = ({ children, ...rest }) => (
  <Box bg="ash" borderRadius="10px" mb="30px" p="25px" {...rest}>
    {children}
  </Box>
)

export const Block = ({ children, ...rest }) => (
  <Box pt="20px" {...rest}>
    {children}
  </Box>
)

export const TitleSidebar = ({ children, ...rest }) => (
  <Title variant="card" fontSize="24px" color="light" {...rest}>
    {children}
  </Title>
)

export const TitlePost = ({ link = '/', children, ...rest }) => (
  <Title variant="card" fontSize="16px" mb={0} {...rest}>
    <Link href={link}>
      <a>
        <Span color="light">{children}</Span>
      </a>
    </Link>
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
