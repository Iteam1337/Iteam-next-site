import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
import imgDesignSprint from "../../assets/image/jpeg/design-sprint.jpeg";

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

const Content4 = () => (
  <>
    {/* <!-- Content section 1 --> */}
    <Section>
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="10" className="order-lg-2 mb-4">
            {/* <div className="position-relative text-lg-right">
              <ImageRight
                className=""
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <img src={imgDesignSprint} alt="" className="img-fluid" />
              </ImageRight>
            </div> */}
          </Col>
          <Col lg="8" className="order-lg-1 mt-5 mt-lg-0">
            <div
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <div>
                <Title>Frontend</Title>
                <Text mb={4}>
                  Webbtjänster, mobilappar och andra gränssnitt utvecklas i nära
                  samarbete med UX-designers. Vår arbetsprocess och höga
                  utvecklingstakt gör att vi snabbt kan testa funktionerna på
                  riktiga användare och iterativt ta fram det användargränssnitt
                  som bäst uppfyller deras behov.
                  <ul style={{ listStyle: "disc", marginLeft: "3rem" }}>
                    <li>Mobilappar</li>
                    <li> Webbtjänster</li>
                    <li> React, Reason, Vue, Angular, Svelte</li>
                    <li>React Native, Flutter, Xamarin</li>
                  </ul>
                </Text>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content4;
