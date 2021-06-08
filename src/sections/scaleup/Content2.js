import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
import imgDesignSprint from "../../assets/image/case/trr-laptop-transparent.png";

const ImageBottom = styled(Box)`
  border: 10px solid transparent;
  box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  position: absolute;
  top: 52%;
  left: -3%;
  z-index: 2;
  border-radius: 500px;
  overflow: hidden;
  max-width: 50%;

  @media ${device.md} {
    max-width: 100%;
  }
  @media ${device.lg} {
    left: 6%;
  }
  @media ${device.xl} {
    left: 8%;
  }
`;

const ImageRight = styled(Box)`
  img {
    box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
    border-radius: 10px;
  }
`;

const Content2 = () => (
  <>
    {/* <!-- Content section 1 --> */}
    <Section id="design_sprint">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="10" className="order-lg-2 mb-4">
            <div className="position-relative text-lg-right">
              <ImageRight
                className=""
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <img src={imgDesignSprint} alt="" className="img-fluid" />
              </ImageRight>
            </div>
          </Col>
          <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
            <div
              data-aos="fade-right"
              data-aos-duration="150"
              data-aos-once="true"
            >
              <div>
                <Title>Utveckling av digitala tjänster</Title>
                <Text mb={4}>
                Vi hjälper TRR att ta en proaktiv roll på arbetsmarknaden och svara på kundernas behov om 
                kompetensförsörjning. Detta kommer på sikt att resultera i en plattform där TRRs kundföretag 
                kan ta del av hela TRRs erbjudande digitalt. 
                </Text>

                <Box>
                  <a href="/case/trr">
                    <Button>Läs mer om TRR</Button>
                  </a>
                </Box>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content2;
