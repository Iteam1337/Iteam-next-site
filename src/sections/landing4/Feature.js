import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

import iconCollaboration from "../../assets/image/png/Lego-2-Medium.png";
import iconOpenSource from "../../assets/image/png/Laptop-Large.png";
import iconInsight from "../../assets/image/png/Video-Call-Large.png";

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
      <img src={iconImage} height="200" alt="" />
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
            <FeatureCard title="Användarstyrd process" iconImage={iconInsight}>
              Användarna älskar det vi gör. Genom att involvera dem redan från
              första början och kontinuerligt bygga det som efterfrågas mest
              blir det bra.
            </FeatureCard>
          </Col>
          <Col lg="4" className="mb-5 mb-lg-4">
            <FeatureCard title="Teamwork" iconImage={iconCollaboration}>
              Komplexa lösningar kräver fler hjärnor. Vi jobbar bara i team
              (därav vårt namn) och alltid med en agil coach så att teamet
              snabbt blir autonomt och högpresterande och du som kund får det
              stöd du behöver.
            </FeatureCard>
          </Col>
          <Col lg="4" className="mb-5 mb-lg-4">
            <FeatureCard title="Open Source" iconImage={iconOpenSource}>
              Genom att använda öppen källkod som princip i allt vi bygger så
              blir det enkelt för vem som helst att ansluta till teamet.
              Dessutom blir det billigare.
            </FeatureCard>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default Feature;
