import React from 'react'
import Image from 'next/image'
import { Row, Col } from 'react-bootstrap'

import { Section, Typography } from '../../components/Core'
import { urlFor } from '../../utils/helpers'
import { Container } from '../../components/Layout'

export const TextWithImageToRight = ({ content }) => {
  return (
    <>
      <Section
        bg="#F7F7FB"
        className="position-relative"
        py={['50px', null, '130px', null, '230px']}
      >
        <Container>
          <Row
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="50"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <Col lg="6" className="mt-5 mt-lg-0 tw-order-2">
              <Typography.H2>{content.title}</Typography.H2>
              <Typography.BlockContent blocks={content.blockText.blockText} />
            </Col>
            <Col
              lg="5"
              className="offset-lg-1 order-1  order-lg-2 tw-mb-5 lg:tw-mb-0"
            >
              <Image
                src={urlFor(content.imageWithAlt.asset._ref)}
                alt={content.imageWithAlt.alt}
                width={1500}
                height={1001}
                layout="responsive"
              />
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}
