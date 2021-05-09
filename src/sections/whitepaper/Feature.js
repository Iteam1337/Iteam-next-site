import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Box, Text } from "../../components/Core";

import iconLayout from "../../assets/image/png/icon-layout.png";
import iconLayers from "../../assets/image/png/icon-layers.png";
import iconResponsive from "../../assets/image/png/icon-responsive.png";

const BoxStyled = styled(Box)`
  border-bottom: 1px solid #eae9f2;
`;

const FeatureCard = ({ iconImage, title, children, ...rest }) => (
  <Box {...rest} className="d-flex flex-column align-items-center">
    <Box mb={[3, 3, 3, 4]} pb={2}>
      <img src={iconImage} alt="" />
    </Box>
    <Box className="text-center">
      <Title variant="card" fontSize="24px" mb={3}>
        {title}
      </Title>
      <Text variant="small">{children}</Text>
    </Box>
  </Box>
);

const Feature = () => (
  <>
    <BoxStyled bg="#f6f6f8" pb={["50px!important"]}>
      <Container>
        <Row className="justify-content-center">
          <Col lg="4" className="mb-5 mb-lg-4">
            <FeatureCard title="Multiple Modern Layouts" iconImage={iconLayout}>
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page quickly.
            </FeatureCard>
          </Col>
          <Col lg="4" className="mb-5 mb-lg-4">
            <FeatureCard title="Built with Bootstrap 4" iconImage={iconLayers}>
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page quickly.
            </FeatureCard>
          </Col>
          <Col lg="4" className="mb-5 mb-lg-4">
            <FeatureCard title="Fully Responsive" iconImage={iconResponsive}>
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page quickly.
            </FeatureCard>
          </Col>
        </Row>
      </Container>
    </BoxStyled>
  </>
);

export default Feature;
