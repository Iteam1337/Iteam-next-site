import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import Image from "next/image"
import { Title, Button, Section, Box, Text } from "../../components/Core"
import { device } from "../../utils"

import imgHalf from "../../assets/image/jpeg/Annie-Lowres.jpg"

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
                <Title>Börja litet</Title>
                <Text>
                  Vi hjälper dig definiera ett lagom scope för din MVP så att du
                  kan lansera något nytt inom tre månader. För att göra det
                  behöver du göra det svåraste som finns: välja bort. Vi har
                  processer och metoder för hur du gör detta på ett strukturerat
                  sätt. Dessutom hjälper vi dig kommunicera dina val och beslut
                  internt så att alla är med på tåget.
                </Text>

                <Button mt={4} onClick={() => (window.location.href = "#book")}>
                  Kom igång
                </Button>
              </div>
            </Section>
          </Col>
          <Col md={8} lg={6} className="position-relative mb-5 mb-lg-0">
            <Image
              height={800}
              width={533}
              layout="responsive"
              src={imgHalf}
              alt="En tjej som sitter med sin telefon i en soffa"
            />
          </Col>
        </Row>
      </Container>
    </div>
  </>
)

export default Content1
