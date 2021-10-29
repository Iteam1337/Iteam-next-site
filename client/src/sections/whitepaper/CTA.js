import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Title, Button, Section, Text } from '../../components/Core'

const SectionStyled = styled(Section)`
  /* border-bottom: 1px solid #eae9f2; */
`

const CTA = () => (
  <>
    <SectionStyled bg="#F6F6F8" className="position-relative">
      <Container>
        <Row>
          <Col lg="8" xl="7">
            <div className="py-4">
              <Title>Learn problem solving</Title>
              <Text>
                Create custom landing pages with Omega that converts more
                visitors than any website.
              </Text>
            </div>
          </Col>
          <Col
            lg="4"
            xl="5"
            className="d-flex align-items-center justify-content-lg-end mt-4 mt-md-0"
          >
            <div>
              <Button>Get this book</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
)

export default CTA
