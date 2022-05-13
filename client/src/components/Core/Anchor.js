import React from 'react'
import styled from 'styled-components'
import { color, space, typography, shadow, system } from 'styled-system'

const Anchor = styled.a`
  font-weight: 300;
  letter-spacing: -0.66px;
  line-height: 35px;
  ${color};
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
    ${color};
    text-decoration: underline;
  }
  &:visited {
    ${color};
  }
`

const A = ({ href = '#', ...props }) => {
  return <Anchor href={href} color="secondary" {...props} />
}

export default A
