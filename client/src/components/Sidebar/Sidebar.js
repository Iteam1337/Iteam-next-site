import React from 'react'

import { Box, Typography } from '../Core'

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
  <Typography.H2 className="tw-mb-6 tw-text-2xl">{children}</Typography.H2>
)

export const TitlePost = ({ link = '/', children }) => (
  <Typography.H3 className="tw-text-base">
    <Typography.Anchor className="tw-text-base tw-font-bold" href={link}>
      {children}
    </Typography.Anchor>
  </Typography.H3>
)

export const Date = ({ children }) => (
  <Typography.Caption>{children}</Typography.Caption>
)
