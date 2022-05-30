import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Title, Button, Section, Box, Text } from '../../components/Core'
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
        <Text
          color="heading"
          as="h3"
          fontSize={4}
          fontWeight={700}
          letterSpacing={-0.75}
          mb={2}
        >
          {title}
        </Text>
        <Text fontSize={2} lineHeight={1.75}>
          {children}
        </Text>
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
              <Title color="light">{section.title}</Title>
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
