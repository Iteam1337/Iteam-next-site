import React from 'react'
import styled from 'styled-components'
import { space, typography, shadow, system } from 'styled-system'

const Anchor = styled.a`
  letter-spacing: -0.5px;
  color: ${({ color, theme }) =>
    color == 'light' ? theme.colors.light : theme.colors.dark};
  text-decoration: none;
  ${space};
  ${typography};
  ${shadow};
  ${system({
    textDecoration: {
      property: 'text-decoration',
    },
  })}
  &:hover,
  &:active,
  &.active {
    color: ${({ color, theme }) =>
      color == 'light' ? theme.colors.light : theme.colors.dark};
    text-decoration: underline;
  }
`

const A = ({ href = '#', ...props }) => {
  return <Anchor href={href} {...props} />
}

export default A
