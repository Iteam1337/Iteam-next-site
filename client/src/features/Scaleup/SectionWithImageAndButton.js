import React from 'react'
import Image from 'next/image'
import { Row, Col } from 'react-bootstrap'

import { CTALink, Section, Typography } from '../../components/Core'
import { urlFor } from '../../utils/helpers'
import { Container } from '../../components/Layout'

export const SectionWithImageAndButton = ({ content }) => {
  const { title, blockText, button, imageWithAlt } = content

  return (
    <Section className="overflow-hidden">
      <Container>
        <Row className="align-items-center">
          <Col
            md={10}
            lg={6}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="50"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <div>
              <Typography.H2>{title}</Typography.H2>
              <Typography.BlockContent blocks={blockText.blockText} />
              <CTALink
                href="#pricing"
                text={button}
                className="tw-mt-8"
                variant="secondary"
              />
            </div>
          </Col>
          <Col md={10} lg={5} className="offset-lg-1 mt-5 mt-lg-0">
            <Image
              src={urlFor(imageWithAlt.asset._ref)}
              alt={imageWithAlt.alt}
              width={1467}
              height={1667}
              layout="responsive"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
