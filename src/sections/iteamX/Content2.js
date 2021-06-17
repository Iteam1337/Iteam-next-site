import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

import { Title, Button, Section, Box, Text } from "../../components/Core"
import { device } from "../../utils"
import imgPM from "../../assets/image/case/predictive-movement.png"
import Link from "next/link"
import Image from "next/image"

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
`

const ImageRight = styled(Box)`
  img {
    box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
    border-radius: 10px;
  }
`

const Content2 = () => (
  <>
    {/* <!-- Content section 1 --> */}
    <Section bg="dark" id="ai_sustainability">
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
                <Image
                  height={324}
                  width={540}
                  layout="responsive"
                  src={imgPM}
                  alt="Predictive Movement"
                />
              </ImageRight>
            </div>
          </Col>
          <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
            <div
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <div>
                <Title color="light">Hållbarhet med AI</Title>
                <Text mb={4} color="light">
                  I projektet Predictive Movement utgår vi från hypotesen att
                  det bör gå att optimera energiåtgången i vägnätet genom att
                  använda sig av AI och en blockkedja.
                </Text>
                <a href="https://predictivemovement.se">
                  <Button bg="secondary" color="dark">
                    Läs om Predictive Movement
                  </Button>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)

export default Content2
