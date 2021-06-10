import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Span } from "../../components/Core";
import { device } from "../../utils";

const SectionStyled = styled(Section)``;

const Author = styled(Box)`
  min-width: 271px;
  max-width: 271px;
  min-height: 271px;
  max-height: 271px;
  border-radius: 500px;
  overflow: hidden;
  margin-bottom: 30px;
  @media ${device.lg} {
    margin-bottom: 0;
  }
`;

const Fact = () => (
  <>
    {/* <!-- Fact section 1 --> */}
    <SectionStyled bg="#f6f6f8">
      <Container>
        <Row>
          <Col xs="12" className="mb-5">
            <div className="text-center">
              <Title>About the author</Title>
            </div>
          </Col>
          <Col lg="4" className="offset-lg-1 mb-4 mb-lg-0"></Col>
          <Col lg="7" className="pr-lg-5">
            <div className="author-text">
              <Title variant="card" fontSize="24px">
                Joseph Williams
              </Title>
              <Text variant="small" my={4}>
                Hey! My name is Joseph Williams and I'm a product designer based
                in Berlin. Most recently I led the design of multiple products
                at WeWork and prior to that I worked with startups building
                their products and design culture.
              </Text>
              <Text variant="small">
                Previous products I built for the design community are used by
                tens of thousands of designers working at companies like Google,
                Airbnb, Netflix and Boeing. Products I built or designed are
                featured in Wired, TechCrunch, Forbes, Quartz, Smashing
                Magazine, Awwwards and more.
              </Text>
              <Text variant="small" mt={4}>
                {" "}
                Reach me on{" "}
                <a href="/" target="_blank">
                  <Span color="secondary">Twitter</Span>
                </a>{" "}
                or{" "}
                <a href="/" target="_blank">
                  <Span color="secondary">Email</Span>
                </a>
                .
              </Text>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default Fact;
