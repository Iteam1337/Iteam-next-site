import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import Image from "next/image"

import { Title, Section, Text } from "../../components/Core"

import imgContent from "../../assets/image/jpeg/People-Working-2-Lowres.jpg"

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
                  height={296}
                  width={445}
                  layout="responsive"
                  src={imgContent}
                  alt="Folk som jobbar vid sina datorer"
                />
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
              <Title color="light">Ett team uppstår inte av en slump</Title>
              <Text color="lightShade">
                Om du vill bygga digitala produkter på riktigt så behöver du
                lämna den traditioella projektmodellen med projektledare som
                designar och utvecklare som gör ut. Bra team uppstår när det
                finns en långsiktighet, tydliga spelregler, uttalat syfte och
                trygghet för alla teammedlemmar att få leva ut sin potential.
              </Text>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
)

export default DesignatedTeam
