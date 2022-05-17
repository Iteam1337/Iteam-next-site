import styled from 'styled-components'
import { device } from '../../utils'

const Paragraph = styled.p`
  margin: 20px 0;
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

const H1 = styled.h1`
  font-weight: 700;
  font-size: 50px;
  line-height: 56px;
  letter-spacing: -2.81px;
  font-size: 50px;
  line-height: 56px;
  margin-bottom: 30px;
  color: black;

  @media ${device.sm} {
    font-size: 66px;
    line-height: 70px;
  }

  @media ${device.lg} {
    font-size: 76px;
    line-height: 84px;
  }

  @media ${device.xl} {
    font-size: 90px;
    line-height: 94px;
  }
`

const H2 = styled.h2`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -1px;
  margin-top: 2.25rem;
  margin-bottom: 1.25rem;
  color: black;
  text-align: left;
  line-height: 1.2;

  @media ${device.lg} {
    font-size: 32px;
  }
`
const H3 = styled.h3`
  font-size: 20px;
  margin: 2.25rem 0 1.25rem;
  color: black;
  text-align: left;
  font-weight: 700;
  line-height: 1.2;

  @media ${device.lg} {
    font-size: 24px;
    font-weight: 500;
  }
`
const H4 = styled.h4`
  font-size: 18px;
  margin: 2.25rem 0 1.25rem;
  color: black;
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
  H1,
  H2,
  H3,
  H4,
  Anchor,
  QuoteMark,
  BlockQuote,
  QuoteParagraph,
}
