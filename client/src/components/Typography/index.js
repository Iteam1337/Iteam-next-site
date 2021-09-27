import styled from "styled-components"
import { device } from "../../utils"

const Paragraph = styled.p`
  margin: 20px 0;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.56px;
  line-height: 30px;
  text-align: left;
`

const ParagraphThin = styled.p`
  margin: 20px 0;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: -0.56px;
  line-height: 35px;
  text-align: center;
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
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -1px;
  margin-top: 2.25rem;
  margin-bottom: 1.25rem;
  color: black;
  text-align: left;
  line-height: 1.2;
`
const H3 = styled.h3`
  font-size: 28px;
  margin: 36px 0 20px;
  color: black;
  text-align: left;
  font-weight: 500;
  line-height: 1.2;
`

const Anchor = styled.a`
  color: rgb(102, 140, 255);
`

export default {
  Paragraph,
  ParagraphThin,
  H1,
  H2,
  H3,
  Anchor,
}