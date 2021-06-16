import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link"
import Image from "next/image"

import { Title, Button, Section, Text } from "../../components/Core"

import imgContent from "../../assets/image/jpeg/Rickard-Working-Lowres.jpg"

const SectionStyled = styled(Section)`
  border-bottom: 1px solid #242427;
`

const DesignatedTeam = () => (
  <>
    <SectionStyled bg="dark">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg="5" className="offset-lg-1 order-lg-2 mb-5 mb-lg-0">
            <div>
              <div
                data-aos="zoom-out"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <Image
                  width={445}
                  height={296}
                  layout="responsive"
                  src={imgContent} alt="" className="img-fluid" />
              </div>
            </div>
          </Col>
          <Col
            md="10"
            lg="6"
            className="order-lg-1"
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-once="true"
          >
            <div>
              <Title color="light">Ett fredat team som ger en bra start</Title>
              <Text color="lightShade">
                När du har fått ett uppdrag och dina befintliga utvecklare och
                designers är upptagna kan vi ändå sätta igång snabbt och bygger
                det viktigaste i en första version.
              </Text>
              <div className="mt-5">
                <Link href="/mvp#book">
                  <Button>Boka ett MVP-team</Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
)

export default DesignatedTeam
