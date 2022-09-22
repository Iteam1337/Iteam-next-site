import React from 'react'
import Link from 'next/link'

import { Box, Span, Anchor, Typography } from '../Core'

export const CardSidebar = ({ children, ...rest }) => (
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

export const Block = ({ children, ...rest }) => (
  <Box pt="20px" {...rest}>
    {children}
  </Box>
)

export const TitleSidebar = ({ children }) => (
  <Typography.H2 additionalClassName="tw-text-2xl tw-mb-6">
    {children}
  </Typography.H2>
)

export const TitlePost = ({ link = '/', children }) => (
  <Typography.H3 additionalClassName="tw-text-base">
    <Anchor href={link}>{children}</Anchor>
  </Typography.H3>
)

export const Date = ({ link = '/', children, ...rest }) => (
  <Typography.Caption>{children}</Typography.Caption>
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
