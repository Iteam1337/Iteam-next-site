import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Span } from "../../components/Core";
import { device } from "../../utils";
import ContentCard from "../../components/ContentCard";

const SectionStyled = styled(Section)``;

const ContentWidget = styled(Box)`
  border-radius: 10px;
  border: 1px solid #2d2d30;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 20px 0;
  padding-left: 28px;
  padding-right: 55px;
  min-width: 100%;
  width: 100%;
  min-height: 90px;
  display: flex;
  align-items: center;
  transition: 0.4s;
  cursor: pointer;

  @media ${device.xl} {
    width: 360px;
    min-width: 360px;
  }
  @media ${device.md} {
    min-height: 89px;
  }

  i {
    font-size: 30px;
    color: #fff;
    position: absolute;
    right: 0;
    margin-right: 30px;
    opacity: 0;
    transition: 0.4s;
  }

  &:hover {
    box-shadow: 0 52px 54px rgba(25, 25, 27, 0.3);
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  /* &:hover i {
    transform: translateX(10px);
    opacity: 1;
  } */
`;

const ContentCard1 = ({ children = "" }) => {
  return (
    <ContentWidget>
      <div className="d-flex align-items-center">
        <Title color="light" variant="card" mb={0}>
          {children}
        </Title>
      </div>

      <i className="fas fa-chevron-circle-right"></i>
    </ContentWidget>
  );
};

const tech = [
  "Blockkedjor",
  "Applicerad AI",
  "Data pipelines",
  "Krypteringslösningar",
  "Digitala tvillingar",
  "Machine Learning",
  "Drönarteknik",
  "VR/AR",
  "Datavisualisering",
];

const Content = () => {
  return (
    <>
      {/* <!-- Content section --> */}
      <SectionStyled bg="dark">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg="10">
              <div className="text-center">
                <Title color="light">
                  Våra X team utgår från{" "}
                  <Span color="secondary">en hypotes.</Span> Den försöker vi
                  därefter att motbevisa med hjälp av olika experiment.
                </Title>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {tech.map((item, i) => (
              <ContentCard key={i} title={item} dark />
            ))}
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Content;
