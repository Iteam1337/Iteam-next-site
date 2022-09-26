import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Box, Span, Typography } from '../../components/Core'
import { device } from '../../utils'
import ContentCard from '../../components/ContentCard'

const SectionStyled = styled(Section)``

const tech = [
  'Blockkedjor',
  'Applicerad AI',
  'Data pipelines',
  'Krypteringslösningar',
  'Digitala tvillingar',
  'Machine Learning',
  'Drönarteknik',
  'VR/AR',
  'Datavisualisering',
]

const Content = ({ content }) => {
  const title = content.title.split('en hypotes.')
  return (
    <>
      {/* <!-- Content section --> */}
      <SectionStyled bg="dark">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg="10">
              <div className="text-center">
                <Typography.H2 className="tw-text-white">
                  {title[0]}
                  <Span color="secondary">en hypotes.</Span> {title[1]}
                </Typography.H2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {tech.map((item, i) => (
              <ContentCard key={i} title={item} dark />
            ))}
          </Row>
        </Container>
      </SectionStyled>
    </>
  )
}

export default Content
