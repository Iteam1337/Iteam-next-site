import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

import { Title, Section, Box, Text } from '../../components/Core'
import { device } from '../../utils'

import svgCurve from '../../assets/image/svg/l1-curve-content2.svg'
import Link from 'next/link'
import { getRouteNameFromPageType, urlFor } from '../../utils/helpers'

const ShapeTop = styled(Box)`
  position: absolute;
  top: 0;
  left: -150px;
  img {
    min-width: 100%;
  }
`

const ShapeCard = styled(Box)`
  width: 305px;
  box-shadow: ${({ theme }) => `0 32px 34px ${theme.colors.border}`};
  position: absolute;
  top: 20%;
  left: 0;
  z-index: 2;
  transform: scale(0.85);
  @media ${device.sm} {
    transform: scale(1);
    left: -14%;
  }
`

const ContentCard = ({ offer }) => (
  <Link href={getRouteNameFromPageType(offer.reference._ref)}>
    <Card className="card-job top-only">
      <div className="mb-3">
        <a>
          <Title variant="card" className="title">
            {offer.title}
          </Title>
        </a>
        <Text>{offer.subtitle}</Text>
      </div>
    </Card>
  </Link>
)

const Card = styled.a`
  justify-content: flex-start;
  box-shadow: 0 2px 4px rgba(14, 86, 124, 0.17);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
  transition: 0.4s;
  border-radius: 0px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 32px 84px rgba(14, 86, 124, 0.17);
    text-decoration: none;
  }
`

const Offerings = ({ data }) => {
  return (
    <>
      {/* <!-- Content section 2 --> */}
      <Section bg="#f7f7fb" className="position-relative">
        <ShapeTop>
          <img src={svgCurve} alt="" className="img-fluid" />
        </ShapeTop>
        <Container>
          <Row className="align-items-center">
            <Col lg="5" md="9" sm="10" className="mb-5 mb-lg-0">
              <div className="position-relative">
                <img
                  src={urlFor(data.imageWithAlt.asset._ref)}
                  alt={data.imageWithAlt.alt}
                  className="img-fluid"
                />
                <ShapeCard
                  bg="secondary"
                  p="18px"
                  borderRadius={8}
                  className="d-flex align-items-start"
                  data-aos="fade-right"
                  data-aos-duration="200"
                  data-aos-once="true"
                  data-aos-delay="800"
                  data-aos-easing="ease-out-back"
                  aria-hidden="true"
                >
                  <Box
                    width="30px"
                    minWidth="30px"
                    height="30px"
                    minHeight="30px"
                    bg="secondary"
                    color="dark"
                    borderRadius="50%"
                    className="d-flex align-items-center justify-content-center"
                    mr={3}
                    mt={2}
                  >
                    <i className="fas fa-bell"></i>
                  </Box>

                  <Box pr="40px">
                    <Text
                      color="dark"
                      lineHeight="24px"
                      fontSize={1}
                      opacity={0.7}
                      mb={0}
                    >
                      {new Date().toLocaleTimeString()}
                    </Text>
                    <Title variant="card" color="dark" fontWeight={300} mb={0}>
                      {data?.message?.text}
                    </Title>
                  </Box>
                </ShapeCard>
              </div>
            </Col>
            <Col lg="7">
              <div className="content-text pl-lg--50">
                <div
                  className="section-title"
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="50"
                  data-aos-duration="200"
                  data-aos-offset="0"
                  data-aos-once="true"
                >
                  <Title>{data?.title}</Title>
                </div>
                <div className="mt-5">
                  {data?.offers?.map((offer, index) => (
                    <div
                      className="section-title"
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="50"
                      data-aos-duration="200"
                      data-aos-offset="0"
                      data-aos-once="true"
                    >
                      <ContentCard offer={offer} key={index} />
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default Offerings
