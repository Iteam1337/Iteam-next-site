import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

import imgMobile from "../../assets/image/png/Lego-2-Medium.png";
import icon3dModel from "../../assets/image/png/icon-3d-model.png";
import iconLayout from "../../assets/image/png/icon-layot-25.png";

const ContentCard = ({ iconImage, title, className, children, ...rest }) => (
  <Box
    {...rest}
    className={`d-flex align-items-start justify-content-start ${className}`}
  >
    <Box mr={4}>
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

const ImgStyled = styled.img`
  box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  max-width: 70%;
  @media ${device.sm} {
    max-width: 50%;
  }
  @media ${device.md} {
    max-width: 33%;
  }
  @media ${device.lg} {
    max-width: 100%;
  }
  @media ${device.xl} {
    margin-left: 50px;
  }
`;

const Content2 = () => (
  <>
    {/* <!-- Content section 2 --> */}
    <Section>
      <Container>
        <Row className="align-items-center">
          <Col lg="6" className="mb-4 mb-lg-0">
            <div
              className="pl-5"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <ImgStyled src={imgMobile} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg="6" md="9">
            <Box className="pt-5 pt-lg-0">
              <Title>
                Vad är ett API?
              </Title>
              <Text>
                De flesta projekt vi jobbar med innehåller ett API på ett eller annat sätt. Det är bra att lära sig vad ett API är:
                API är ett standardiserat sätt för program att prata med varandra.
              </Text>
              <Box mt={4} pt={3}>
                <ContentCard
                  title="Leder till snabbare utveckling"
                  iconImage={icon3dModel}
                  mb={4}
                >
                  När inte alla behöver känna till hur gamla system fungerar finns det fler personer att välja på för nyutveckling.
                </ContentCard>
                <ContentCard
                  title="Kapslar in legacy"
                  iconImage={iconLayout}
                >
                  När man väl har ett API kan man enklare byta ut delar som tidigare var sammansvetsade med gränssnitten.
                </ContentCard>
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content2;
