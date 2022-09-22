import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Title, Button, Section, Box, Typography } from '../../components/Core'
import BlockContent from '../../components/BlockContent'
import styled from 'styled-components'

const FeatureCard = ({
  color = 'primary',
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box width={'100%'} bg="light" p="30px" borderRadius={10} {...rest}>
    <div className="d-flex justify-content-between align-items-start">
      <div>
        <Typography.H3>{title}</Typography.H3>
        <Typography.ParagraphSmall>{children}</Typography.ParagraphSmall>
      </div>
    </div>
  </Box>
)

const Anchor = styled.a`
  &:hover {
    text-decoration: none;
  }
`

const SectionWithButtonAndTextGrid = ({ content, linkTo = 'book' }) => {
  const { section, textGrid, button } = content

  return (
    <Section bg="ash">
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
              <Typography.H2 additionalClassName="tw-text-white">
                {section.title}
              </Typography.H2>
              <BlockContent
                color="light"
                blocks={section.blockText.blockText}
                anchorColor="light"
              />
              <Anchor href={`#${linkTo}`}>
                <Button mt={4}>{button}</Button>
              </Anchor>
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
                      <FeatureCard color="primary" title={block.title}>
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

export default SectionWithButtonAndTextGrid
