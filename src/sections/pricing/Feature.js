import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

const FeatureCard = ({
  color = "primary",
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box pt="15px" px="30px" borderRadius={10} mb={4} {...rest}>
    <Box
      size={69}
      borderRadius="50%"
      color={color}
      fontSize="28px"
      className="d-flex justify-content-center align-items-center mx-auto"
      css={`
        background-color: ${({ theme, color }) =>
          rgba(theme.colors[color], 0.1)};
      `}
    >
      <i className={`icon ${iconName}`}></i>
    </Box>
    <div className="text-center">
      <Text
        color="heading"
        as="h3"
        fontSize={4}
        fontWeight={500}
        letterSpacing={-0.75}
        my={3}
      >
        {title}
      </Text>
      <Text fontSize={2} lineHeight={1.75}>
        {children}
      </Text>
    </div>
  </Box>
);

const Feature = () => (
  <>
    {/* <!-- Feature section --> */}
    <Section className="position-relative">
      <Container>
        <Row className="mb-3 text-center">
          <Col lg="12">
            <Title>Check all of our features</Title>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-5">
            <FeatureCard
              color="secondary"
              iconName="icon-sidebar-2"
              title="Fully Responsive"
            >
              With lots of unique blocks, you can easily build a page without
              coding.
            </FeatureCard>
          </Col>

          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-5">
            <FeatureCard
              color="primary"
              iconName="icon-layout-11"
              title="Multiple Layouts"
            >
              With lots of unique blocks, you can easily build a page without
              coding.
            </FeatureCard>
          </Col>

          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-5">
            <FeatureCard
              color="secondary"
              iconName="icon-airplane-2"
              title="Faster Loading"
            >
              With lots of unique blocks, you can easily build a page without
              coding.
            </FeatureCard>
          </Col>

          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-5">
            <FeatureCard
              color="primary"
              iconName="icon-voice-recognition-2"
              title="Super Support"
            >
              With lots of unique blocks, you can easily build a page without
              coding.
            </FeatureCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-5">
            <FeatureCard
              color="warning"
              iconName="icon-bookmark-2-2"
              title="Rich Documentation"
            >
              With lots of unique blocks, you can easily build a page without
              coding.
            </FeatureCard>
          </Col>

          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-5">
            <FeatureCard
              color="secondary"
              iconName="icon-infinite"
              title="Lifetime Updates"
            >
              With lots of unique blocks, you can easily build a page without
              coding.
            </FeatureCard>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Feature;
