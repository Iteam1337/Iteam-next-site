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
  margin: 30px auto 0;
  padding: 40px;
  text-align:left;

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
      width: 30px !important;
      height: 30px;
      background-color: ${({ theme }) => rgba(theme.colors.secondary, 0.2)};
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
              <div className=" text-center" id="pricing">
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
              <Text>Löpande</Text>

              <Switch onClick={() => setTimeMonthly(!timeMonthly)} />
              <div className="d-flex align-items-center">
                <Text>Fast avtal ( &gt; 3 mån)</Text>
                <Badge ml={2}>15% rabatt</Badge>
              </div>
            </div>


            <Row className="justify-content-center" >
              <Col lg="8" className="mb-5 align-items-center" >
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
                    <ULStyled >
                      <li>Kompetens inom UX, utveckling och teamfacilitering</li>
                      <li> Arbetar med en avgränsad del av er verksamhet</li>
                      <li> Stöd och coachning till dig som beställare</li>
                      <li>2 eller 4 dagar/vecka</li>
                    </ULStyled>
                  </div>
                  <a href="/book">
                    <Button bg="primary">Boka tid för intromöte</Button>
                  </a>
                </CardPricing>
              </Col>
              {/*<Col lg="6" className="mb-4">
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
                        {timeMonthly ? 1200 : 900}
                      </Title>
                      <TimePer> /h</TimePer>
                    </div>
                    <Text fontSize="18px">timtaxa</Text>
                    <ULStyled>
                      <li>Frontend, Backend, Fullstack</li>
                      <li>UX, Agil Coach, Strateg</li>
                      <li>Minst tre månaders avtal</li>
                      <li>Stärker upp ert team</li>
                      <li>Minst 32h/vecka</li>
                    </ULStyled>
                  </div>
                  <Button bg="secondary">Boka tid för intromöte</Button>
                </CardPricing>
              </Col>*/}
            </Row>
          </div>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Pricing;
