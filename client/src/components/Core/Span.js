import React from 'react'
import styled from 'styled-components'
import { color, space, typography, shadow } from 'styled-system'

const SpanStyled = styled.span`
  ${color};
  ${space};
  ${typography};
  ${shadow};
`

export const Span = ({ ...props }) => {
  return <SpanStyled {...props} />
}
