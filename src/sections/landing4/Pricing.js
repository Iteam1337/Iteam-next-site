import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { rgba } from "polished";

import {
  Title,
  Section,
  Box,
  Text,
  Badge,
  Button,
  Switch,
} from "../../components/Core";
import { device } from "../../utils";

const SectionStyled = styled(Section)`
  position: relative;
  &::after {
    content: "";
    left: 0;
    bottom: 0;
    height: 30%;
    width: 100%;
    position: absolute;
    background: ${({ theme }) => theme.colors.dark}!important;
  }
`;

const ULStyled = styled.ul`
  list-style: none;
  max-width: 350px;
  margin: 30px auto 0;
  padding-left: 0;

  @media ${device.sm} {
    display: flex;
    flex-wrap: wrap;
  }
  @media ${device.lg} {
    justify-content: space-between;
  }

  li {
    color: #19191b;
    font-size: 21px;
    font-weight: 300;
    letter-spacing: -0.66px;
    line-height: 50px;
    display: flex;
    margin-bottom: 5px;
    width: 100%;

    &:before {
      content: "\f00c";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      display: inline-block;
      font-size: 13px;
      width: 30px;
      height: 30px;
      background-color: ${({ theme }) => rgba(theme.colors.secondary, 0.1)};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 500px;
      color: ${({ theme }) => theme.colors.secondary};
      position: relative;
      top: 9px;
      margin-right: 13px;
    }
  }
`;

const CardPricing = styled(Box)`
  box-shadow: ${({ theme }) =>
    `0 52px 54px ${rgba(theme.colors.shadow, 0.125)}`};
  border-radius: 10px;
  background-color: #fff;
  padding-top: 30px;

  button {
    width: 100% !important;
    border-radius: 0 0 10px 10px !important;
  }
`;

const TitleSmall = styled.h4`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.5px;
  line-height: 28px;
`;

const Currency = styled.span`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 30px;
  font-weight: 300;
  letter-spacing: -0.52px;
  line-height: 1;
  margin-bottom: 5px;
`;

const TimePer = styled.span`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 30px;
  font-weight: 300;
  letter-spacing: -0.52px;
  line-height: 1;
  margin-bottom: 5px;
`;

const Pricing = () => {
  const [timeMonthly, setTimeMonthly] = useState(true);

  return (
    <>
      {/* <!-- Pricing section --> */}
      <SectionStyled bg="#F7F7FB" pt="90px !important" pb="0 !important">
        <Container
          className="position-relative"
          css={`
            z-index: 1;
          `}
        >
          <Row className="justify-content-center">
            <Col md="8" lg="9">
              <div className=" text-center">
                <Title>Våra enkla priser</Title>
                <Text>
                  Vi vill göra det enkelt att jobba med oss{" "}
                  <br className="d-none d-md-block" /> därför har vi enkla och transparenta prislistor.
                </Text>
              </div>
            </Col>
          </Row>
          <div className="text-center pt-5">
            <div className="d-inline-flex justify-content-between align-items-center mb-5">
              <Text>Styckpris</Text>

              <Switch onClick={() => setTimeMonthly(!timeMonthly)} />
              <div className="d-flex align-items-center">
                <Text>Ramavtal (3 mån)</Text>
                <Badge ml={2}>Save 25%</Badge>
              </div>
            </div>

            <Row>
              <Col lg="6" className="mb-5">
                <CardPricing>
                  <div className="mb-4">
                    <TitleSmall>Helt team</TitleSmall>
                    <div className="d-flex align-items-end justify-content-center my-3">
                      <Currency>SEK</Currency>
                      <Title
                        css={`
                          font-size: 80px;
                          letter-spacing: -1.38px;
                          margin-bottom: 0 !important;
                        `}
                      >
                        {timeMonthly ? 1200 : 1400}
                      </Title>
                      <TimePer>/h</TimePer>
                    </div>
                    <Text fontSize="18px">per person</Text>
                    <ULStyled>
                      <li>Frontendutvecklare</li>
                      <li>Backendutvecklare</li>
                      <li>UX-designer</li>
                      <li>Agil coach</li>
                      <li>Max tre dagar i veckan</li>
                    </ULStyled>
                  </div>
                  <Button bg="secondary">Boka en provvecka</Button>
                </CardPricing>
              </Col>
              <Col lg="6" className="mb-4">
                <CardPricing>
                  <div className="mb-4">
                    <TitleSmall>Konsult</TitleSmall>
                    <div className="d-flex align-items-end justify-content-center my-3">
                      <Currency>SEK</Currency>
                      <Title
                        css={`
                          font-size: 80px;
                          letter-spacing: -1.38px;
                          margin-bottom: 0 !important;
                        `}
                      >
                        {timeMonthly ? 1400 : 900}
                      </Title>
                      <TimePer> /h</TimePer>
                    </div>
                    <Text fontSize="18px">timtaxa</Text>
                    <ULStyled>
                      <li>Minst tre månaders avtal</li>
                      <li>Stärker upp ert team</li>
                      <li>6 months premium support</li>
                      <li>Lifetime updates</li>
                      <li>32h i veckan</li>
                    </ULStyled>
                  </div>
                  <Button bg="secondary">Start 14 Days Free Trial</Button>
                </CardPricing>
              </Col>
            </Row>
          </div>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Pricing;
