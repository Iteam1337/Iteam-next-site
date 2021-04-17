import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

import iconLayout from "../../assets/image/png/icon-layout.png";
import iconLayers from "../../assets/image/png/icon-layers.png";
import iconResponsive from "../../assets/image/png/icon-responsive.png";

const SectionStyled = styled(Section)`
  padding-top: 47px;
  padding-bottom: 23px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.border}`};
  @media ${device.md} {
    padding-top: 87px;
    padding-bottom: 63px;
  }
`;

const FeatureCard = ({ iconImage, title, children, ...rest }) => (
  <Box {...rest}>
    <Box mb={[3, 3, 3, 4]} pb={2}>
      <img src={iconImage} alt="" />
    </Box>
    <Box>
      <Title variant="card" fontSize="24px" mb={3}>
        {title}
      </Title>
      <Text variant="small">{children}</Text>
    </Box>
  </Box>
);

const Feature = () => (
  <>
    {/* <!-- Feature section --> */}
    <SectionStyled>
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
    </SectionStyled>
  </>
);

export default Feature;
