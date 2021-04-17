import React from "react";
import styled from "styled-components";
import { device } from "../../utils";

const DivStyled = styled.div`
  padding: 50px 0;
  @media ${device.md} {
    padding: 75px 0;
  }
  @media ${device.lg} {
    padding: 100px 0;
  }
`;

const DivStyledInside = styled(DivStyled)`
  padding: 50px 25px;
  @media ${device.md} {
    padding: 70px 60px;
  }
  @media ${device.lg} {
    padding: 80px 70px;
  }
`;

const Section = ({ children, inside, ...rest }) => {
  return inside ? (
    <DivStyledInside {...rest}> {children}</DivStyledInside>
  ) : (
    <DivStyled {...rest}> {children}</DivStyled>
  );
};

export default Section;
