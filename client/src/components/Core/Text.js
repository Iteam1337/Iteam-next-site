import React from 'react'
import styled from 'styled-components'
import { color, space, typography, shadow } from 'styled-system'

const Paragraph = styled.p`
  margin-bottom: 0;
  font-size: 21px;
  font-weight: 300;
  letter-spacing: normal;
  line-height: 38px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
  color: ${({ theme, color }) =>
    color == 'light' ? theme.colors.light : theme.colors.dark};
`

const ParagraphSmall = styled(Paragraph)`
  font-size: 16px;
  line-height: 28px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
  color: ${({ theme, color }) =>
    color == 'light' ? theme.colors.light : theme.colors.dark};
`

const Text = ({ variant, color = 'dark', ...props }) => {
  let TextRender

  switch (variant) {
    case 'small':
      TextRender = ParagraphSmall
      break
    default:
      TextRender = Paragraph
  }

  return <TextRender color={color} {...props} />
}

export default Text
