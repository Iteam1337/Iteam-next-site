import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

import { Title, Button, Section, Box, Text } from "../../components/Core"
import { device } from "../../utils"

import imgContent from "../../assets/image/jpeg/Teacher-Christian.jpg"

const ImgContainer = styled(Box)`
  position: absolute;
  top: -40%;
  right: -40%;

  @media ${device.xl} {
    right: -40%;
  }
`

const Content3 = () => {
  return (
    <>
      {/* <!-- Content3 Area --> */}
      <Section bg="secondary" className="position-relative overflow-hidden">
        <ImgContainer className="d-none d-lg-block">
          <img src={imgContent} alt="" className="img-fluid" />
        </ImgContainer>
        <Container>
          <Row className="">
            <Col lg="6" className="order-lg-1">
              <div
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <Box>
                  <Title color="dark">
                    Den här utbildningen borde vara obligatorisk i offentlig
                    sektor
                  </Title>
                  <Text mb={4} color="dark" opacity={0.7}>
                    Create custom landing pages with Omega that convert more
                    visitors than any website. With lots of unique blocks, you
                    can easily build a page without coding.
                  </Text>
                  <div className="d-flex flex-column align-items-start pt-3">
                    <Button bg="warning" color="dark">
                      Try it now
                    </Button>
                  </div>
                </Box>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default Content3
