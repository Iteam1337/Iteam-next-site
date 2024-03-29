import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Typography, CTALink } from '../../components/Core'
import { urlFor, buildInternalUrl } from '../../utils/helpers'

const SectionStyled = styled(Section)`
  border-bottom: 1px solid #242427;
`

/*
 * This component is both for linking to an id or sending to another page.
 */
export const SectionWithImageAndCta = ({ content, referenceTo = '' }) => {
  return (
    <>
      <SectionStyled bg="dark">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="5" className="offset-lg-1 order-lg-2 mb-5 mb-lg-0">
              <Image
                src={urlFor(content.imageWithAlt.asset._ref)}
                alt={content.imageWithAlt.alt}
                width={1500}
                height={1001}
                layout="responsive"
              />
            </Col>
            <Col
              md="10"
              lg="6"
              className="order-lg-1"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="50"
              data-aos-offset="0"
              data-aos-once="true"
            >
              <div>
                <Typography.H2 className="tw-text-white">
                  {content.title}
                </Typography.H2>
                <Typography.BlockContent
                  light
                  blocks={content.blockText.blockText}
                />
                <CTALink
                  href={
                    referenceTo
                      ? referenceTo
                      : buildInternalUrl(content.cta.reference)
                  }
                  text={referenceTo ? content.button : content.cta.title}
                  className="tw-mt-8"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  )
}
