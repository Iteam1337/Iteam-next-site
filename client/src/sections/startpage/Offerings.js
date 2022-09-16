import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

import { Title, Section, Box, Typography } from '../../components/Core'
import { device } from '../../utils'

import svgCurve from '../../assets/image/svg/l1-curve-content2.svg'
import { getRouteNameFromPageType, urlFor } from '../../utils/helpers'
import Card from '../../components/Card'
import CardList from '../../components/CardList'

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
                    <Typography.Caption>
                      {new Date().toLocaleTimeString()}
                    </Typography.Caption>
                    <Typography.ParagraphSmall additionalClassName="tw-mt-2 tw-leading-normal">
                      {data?.message?.text}
                    </Typography.ParagraphSmall>
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
                <div
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="50"
                  data-aos-duration="200"
                  data-aos-offset="0"
                  data-aos-once="true"
                >
                  <CardList.CardListFlex
                    additionalClassName="tw-mt-5"
                    column={true}
                  >
                    {data?.offers?.map((offer) => (
                      <Card.SimpleCard
                        key={offer.title}
                        link={getRouteNameFromPageType(offer.reference._ref)}
                        icon=""
                        title={offer.title}
                        readMore={true}
                        bgDark={false}
                      >
                        {offer.subtitle}
                      </Card.SimpleCard>
                    ))}
                  </CardList.CardListFlex>
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
