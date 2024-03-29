import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Box, Typography, CTALink } from '../../components/Core'

const FeatureCard = ({ title, children, ...rest }) => (
  <Box width={'100%'} bg="light" p="30px" borderRadius={10} {...rest}>
    <div className="d-flex justify-content-between align-items-start">
      <div>
        <Typography.H3>{title}</Typography.H3>
        <Typography.ParagraphSmall>{children}</Typography.ParagraphSmall>
      </div>
    </div>
  </Box>
)

export const SectionWithButtonAndTextGrid = ({ content, linkTo = 'book' }) => {
  const { section, textGrid, button } = content

  return (
    <Section className="tw-bg-gray-dark">
      <Container>
        <Row className="align-items-center">
          <Col
            md="8"
            lg="6"
            className="offset-lg-1 pl-lg-5 order-lg-2"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="50"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <Box>
              <Typography.H2 className="tw-text-white">
                {section.title}
              </Typography.H2>
              <Typography.BlockContent
                light
                blocks={section.blockText.blockText}
              />
              <CTALink className="tw-mt-8" href={`#${linkTo}`} text={button} />
            </Box>
          </Col>
          <Col md="8" lg="5" className="order-lg-1 mt-5 mt-lg-0">
            <div>
              <Row
                className="justify-content-center"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="400"
                data-aos-offset="0"
                data-aos-once="true"
              >
                {textGrid.texts.map((block, i) => {
                  return (
                    <Col md="12" className={i != 0 && 'mt-4'} key={i}>
                      <FeatureCard title={block.title}>
                        {block.text}
                      </FeatureCard>
                    </Col>
                  )
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
