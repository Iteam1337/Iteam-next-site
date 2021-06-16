import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import Image from "next/image"

import { Title, Button, Section, Text } from "../../components/Core"
import { device } from "../../utils"

import imgHalf from "../../assets/image/jpeg/teamcoach.jpeg"

const ImageWrapper = styled.div`
margin-top: 2rem;

  @media ${device.md}{
    margin-top: 2rem;
  }

  @media ${device.lg} {
      margin-top: 50%;
  }

  @media ${device.xl} {
    margin-top: 30%;
  }

`

const Content1 = () => (
  <>
    <div className="overflow-hidden">
      <Container>
        <Row>
          <Col
            md={8}
            lg={6}
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <Section py={[5, null, null, "190px"]}>
              <div className="omga-02__content-text section-title order-lg-1">
                <Title>Konsult betyder rådgivare</Title>
                <Text>
                  I dag har nästan ordet konsult börjat betyda resurs. Det
                  tycker vi är fel. En konsult kommer in med specifik kunskap
                  och ska vara med så kort tid som möjligt och tillföra så stort
                  värde som möjligt. Vi satsar mycket på lärande och väljer våra
                  uppdrag med omsorg för att kunna använda ordet konsult med
                  dess rätta betydelse.
                </Text>
                <Button
                  mt={4}
                  onClick={() => (window.location.href = "#pricing")}
                >
                  Se våra priser
                </Button>
              </div>
            </Section>
          </Col>
          <Col md={8} lg={6} className="position-relative mb-5 mb-lg-0">
            <ImageWrapper>
              <Image
                height={556}
                width={490}
                layout="responsive"
                src={imgHalf}
                alt="Två personer som pratar med varandra"
              />
            </ImageWrapper>

          </Col>
        </Row>
      </Container>
    </div>
  </>
)


export default Content1
