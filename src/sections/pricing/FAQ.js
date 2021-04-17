import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

const SectionStyled = styled(Section)``;

const FaqCard = ({ title, children, ...rest }) => (
  <Box {...rest}>
    <Title variant="card" mb={4} fontSize="24px" fontWeight="900">
      {title}
    </Title>
    <Text variant="small">{children}</Text>
  </Box>
);

const FAQ = () => (
  <>
    <SectionStyled bg="#F7F7FB">
      <Container>
        <Row className="justify-content-center">
          <Col xl="7" lg="8" md="9">
            <div className="text-center">
              <Title>
                Frequently
                <br className="d-none d-sm-block" /> Asked Question
              </Title>
              <Text>Create custom landing pages with Omega that converts.</Text>
            </div>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col lg="6" className="mt-5">
            <FaqCard title="What’s gonna be your question?">
              Create custom landing pages with Omega that converts more visitors
              than any website. With lots of unique blocks, you can easily build
              a page without any design or custom coding.
            </FaqCard>
          </Col>
          <Col lg="6" className="mt-5">
            <FaqCard title="What’s gonna be your question?">
              Create custom landing pages with Omega that converts more visitors
              than any website. With lots of unique blocks, you can easily build
              a page without any design or custom coding.
            </FaqCard>
          </Col>
          <Col lg="6" className="mt-5">
            <FaqCard title="What’s gonna be your question?">
              Create custom landing pages with Omega that converts more visitors
              than any website. With lots of unique blocks, you can easily build
              a page without any design or custom coding.
            </FaqCard>
          </Col>
          <Col lg="6" className="mt-5">
            <FaqCard title="What’s gonna be your question?">
              Create custom landing pages with Omega that converts more visitors
              than any website. With lots of unique blocks, you can easily build
              a page without any design or custom coding.
            </FaqCard>
          </Col>
          <Col lg="6" className="mt-5">
            <FaqCard title="What’s gonna be your question?">
              Create custom landing pages with Omega that converts more visitors
              than any website. With lots of unique blocks, you can easily build
              a page without any design or custom coding.
            </FaqCard>
          </Col>
          <Col lg="6" className="mt-5">
            <FaqCard title="What’s gonna be your question?">
              Create custom landing pages with Omega that converts more visitors
              than any website. With lots of unique blocks, you can easily build
              a page without any design or custom coding.
            </FaqCard>
          </Col>

          <Col lg="12" className="">
            <Box className="text-center" pt={5}>
              <Text variant="small">
                Didn’t find your answer?{" "}
                <a
                  href="/"
                  target="_blank"
                  css={`
                    color: ${({ theme }) => theme.colors.primary} !important;
                  `}
                >
                  Contact us here
                </a>
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default FAQ;
