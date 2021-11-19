import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Title, Section, Box, Text } from '../../components/Core'
import { device } from '../../utils'
import BlockContent from '../../components/BlockContent'

const SectionStyled = styled(Section)`
  padding-top: 47px;
  padding-bottom: 23px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.border}`};
  @media ${device.md} {
    padding-top: 87px;
    padding-bottom: 63px;
  }
`

const FeatureCard = ({ title, children, ...rest }) => (
  <Box {...rest}>
    <Box>
      <Title variant="card" fontSize="24px" mb={3}>
        {title}
      </Title>
      <Text variant="small">{children}</Text>
    </Box>
  </Box>
)

const TextGrid = ({ content }) => {
  return (
    <SectionStyled>
      <Container>
        <Row className="justify-content-center">
          {content.texts.map((text, i) => {
            return (
              <Col lg="4" className="mb-5 mb-lg-4" key={i}>
                <FeatureCard title={text.title}>{text.text}</FeatureCard>
              </Col>
            )
          })}
        </Row>
      </Container>
    </SectionStyled>
  )
}

export default TextGrid
