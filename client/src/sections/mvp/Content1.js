import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button, Section, Typography } from '../../components/Core'
import { urlFor } from '../../utils/helpers'
import Image from 'next/image'

const Content1 = ({ content }) => {
  return (
    <Section py={0}>
      <Container>
        <Row className="align-items-center">
          <Col
            md="10"
            lg="6"
            className="mt-5 mt-lg-0"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="50"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <div>
              <Typography.H2>{content.title}</Typography.H2>
              <Typography.BlockContent blocks={content.blockText.blockText} />
              <Button mt={4} onClick={() => (window.location.href = '#book')}>
                {content.button}
              </Button>
            </div>
          </Col>
          <Col md="10" lg="5" className="offset-lg-1 tw-my-12 lg:tw-my-0">
            <Image
              src={urlFor(content.imageWithAlt.asset._ref)}
              alt={content.imageWithAlt.alt}
              width={1001}
              height={1500}
              layout="responsive"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default Content1
