import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

import { Section, Box, Typography } from '../../components/Core'
import svgCurve from '../../assets/image/svg/l1-curve-content2.svg'
import { getRouteNameFromPageType, urlFor } from '../../utils/helpers'
import { Card } from '../../components/Card'
import { CardList } from '../../components/CardList'

const ShapeTop = styled(Box)`
  position: absolute;
  top: 0;
  left: -150px;
  img {
    min-width: 100%;
  }
`

export const Offerings = ({ data }) => {
  const [time, setTime] = useState('00:00:00')

  useEffect(() => {
    setTime(new Date().toLocaleTimeString())
  }, [])

  return (
    <>
      {/* <!-- Content section 2 --> */}
      <Section bg="#f7f7fb" className="position-relative">
        <ShapeTop>
          <Image src={svgCurve} alt="" aria-hidden="true" />
        </ShapeTop>
        <Container>
          <Row className="align-items-center">
            <Col lg="5" md="9" sm="10" className="mb-5 mb-lg-0">
              <div className="position-relative">
                <Image
                  src={urlFor(data.imageWithAlt.asset._ref)}
                  alt={data.imageWithAlt.alt}
                  width={1001}
                  height={1500}
                  layout="responsive"
                />
                <div
                  className="tw-absolute tw-top-[20%] tw-left-2  md:tw-left-[-10%]"
                  data-aos="fade-right"
                  data-aos-duration="200"
                  data-aos-once="true"
                  data-aos-delay="800"
                  data-aos-easing="ease-out-back"
                  aria-hidden="true"
                >
                  <Card.NotificationCard
                    link="/book"
                    icon="fas fa-bell"
                    preTitle={time}
                    title={data?.message?.text}
                    variant="secondary"
                    bgDark={false}
                    ariaLabel="Boka ett möte"
                  />
                </div>
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
                  <Typography.H2>{data?.title}</Typography.H2>
                </div>
                <div
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="50"
                  data-aos-duration="200"
                  data-aos-offset="0"
                  data-aos-once="true"
                >
                  <CardList.CardListFlex className="tw-mt-5" column={true}>
                    {data?.offers?.map((offer) => (
                      <Card.SimpleCard
                        key={offer.title}
                        link={getRouteNameFromPageType(offer.reference._ref)}
                        icon=""
                        title={offer.title}
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
