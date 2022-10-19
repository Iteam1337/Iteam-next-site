import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import clsx from 'clsx'

import { Section, Typography } from '../../components/Core'
import { urlFor } from '../../utils/helpers'

const SectionStyled = styled(Section)`
  border-bottom: 1px solid ${({ bg }) => (bg == 'dark' ? '#242427' : 'white')};
  background-color: ${({ bg }) => (bg == 'dark' ? 'rgb(25,25,27)' : 'white')};
  overflow: hidden;
`
export const SectionWithImage = ({ content, bg = 'light' }) => {
  return (
    <SectionStyled bg={bg}>
      <Container>
        <Row
          className="justify-content-center align-items-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="50"
          data-aos-offset="0"
          data-aos-once="true"
        >
          <Col lg="5" className="offset-lg-1 order-lg-2 mb-5 mb-lg-0">
            <Image
              src={urlFor(content.imageWithAlt.asset._ref)}
              alt={content.imageWithAlt.alt}
              width={2500}
              height={1667}
              layout="responsive"
            />
          </Col>
          <Col
            md="10"
            lg="6"
            className="order-lg-1"
            // data-aos="fade-right"
            data-aos-duration="750"
            data-aos-once="true"
          >
            <div>
              <Typography.H2
                className={clsx(
                  bg === 'dark' ? 'tw-text-white' : 'tw-text-dark-grey'
                )}
              >
                {content.title}
              </Typography.H2>
              <Typography.BlockContent
                light={bg === 'dark'}
                blocks={content.blockText.blockText}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  )
}
