import styled from 'styled-components'
import { device } from '../../utils'

const Paragraph = styled.p`
  margin: 27px 0;
  font-size: ${({ size }) => (size == 'subtitle' ? '21px' : '18px')};
  font-weight: ${({ variant }) => (variant == 'thin' ? 300 : 500)};
  letter-spacing: ${({ variant }) =>
    variant == 'thin' ? 'normal' : '-0.56px'};
  line-height: ${({ variant }) => (variant == 'thin' ? '2' : '1.4')};
  text-align: ${({ textAlign }) => (textAlign == 'center' ? 'center' : 'left')};
  color: ${({ color }) =>
    color == 'light' ? 'rgba(255,255,255, 0.7)' : '#19191b'};
`
const QuoteParagraph = styled(Paragraph)`
  font-size: 19.5px;
`

const H2 = styled.h2`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -1px;
  margin: 36px 0 27px;
  color: ${({ theme }) => theme.colors.dark};
  text-align: left;
  line-height: 1.2;

  @media ${device.lg} {
    font-size: 32px;
  }
`
const H3 = styled.h3`
  font-size: 20px;
  margin: 36px 0 18px;
  color: ${({ theme }) => theme.colors.dark};
  text-align: left;
  font-weight: 700;
  line-height: 1.2;

  + p {
    margin-top: -9px;
  }

  @media ${device.lg} {
    font-size: 24px;
  }
`
const H4 = styled.h4`
  font-size: 18px;
  margin: 36px 0 27px;
  color: ${({ theme }) => theme.colors.dark};
  text-align: left;
  font-weight: 500;
  line-height: 1.2;

  @media ${device.lg} {
    font-size: 20px;
  }
`
const Anchor = styled.a`
  color: ${({ color, theme }) =>
    color === 'secondary' ? theme.colors.secondary : theme.colors.info};
`
const QuoteMark = styled.div`
  font-size: 2.5rem;
  font-family: Georgia, serif;
  color: #999;
  margin-right: 1rem;
  margin-top: -0.5rem;
`
const BlockQuote = styled.blockquote`
  box-sizing: border-box;
  min-width: 0;
  position: relative;
  background-color: white;
  font-style: italic;
  display: flex;
  flex-direction: row;
`

export default {
  Paragraph,
  H2,
  H3,
  H4,
  Anchor,
  QuoteMark,
  BlockQuote,
  QuoteParagraph,
}
