import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import { Section, Box, Typography } from '../../components/Core'
import { urlFor } from '../../utils/helpers'
import { Container } from '../../components/Layout'

const ContentImg = styled(Box)`
  box-shadow: ${({ theme }) => `0 42px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
`

export const Content = ({ content }) => (
  <>
    <Section>
      <Container>
        <Row className="justify-content-center pb-4">
          <Col lg="6">
            <Typography.H2>{content.section.title}</Typography.H2>
          </Col>
          <Col lg="6" className="pl-lg-5">
            <Typography.BlockContent
              blocks={content.section.blockText.blockText}
            />
          </Col>
        </Row>
        <Row className="mt-5">
          {content.layoutImages.map((image, index) => {
            if (index % 2 == 0) {
              return (
                <Col lg="4" sm="5" className="mb-4" key={index}>
                  <ContentImg>
                    <div className="tw-relative tw-h-[200px] sm:tw-h-[400px]">
                      <Image
                        src={urlFor(image.asset._ref)}
                        alt={image.alt}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </ContentImg>
                </Col>
              )
            }
            return (
              <Col lg="8" sm="7" className="mb-4" key={index}>
                <ContentImg>
                  <div className="tw-relative tw-h-[200px] sm:tw-h-[400px]">
                    <Image
                      src={urlFor(image.asset._ref)}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </ContentImg>
              </Col>
            )
          })}
        </Row>
      </Container>
    </Section>
  </>
)
