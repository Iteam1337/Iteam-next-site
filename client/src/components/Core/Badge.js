import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

const BadgeSolid = styled.span`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.41px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.pink};
  background-color: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.dark};
  padding: 4px 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  ${space};
`

export const Badge = ({ ...rest }) => {
  return <BadgeSolid {...rest} />
}
