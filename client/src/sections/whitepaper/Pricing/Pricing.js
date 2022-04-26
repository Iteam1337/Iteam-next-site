import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Title, Section, Text } from '../../../components/Core'

import PricingTable from './PricingTable1'

const SectionStyled = styled(Section)`
  position: relative;
`

const Pricing = () => {
  return (
    <>
      {/* <!-- Pricing section --> */}
      <SectionStyled bg="ash" pt="90px !important" pb="0 !important">
        <Container
          className="position-relative"
          css={`
            z-index: 1;
          `}
        >
          <Row className="justify-content-center">
            <Col md="8" lg="9">
              <div className=" text-center">
                <Title color="light">Pricing &amp; Plans</Title>
                <Text color="lightShade">
                  Create custom landing pages with Omega that converts{' '}
                  <br className="d-none d-md-block" /> more visitors than any
                  website.
                </Text>
              </div>
            </Col>
          </Row>
          <div className="text-center pt-5">
            <PricingTable />
          </div>
        </Container>
      </SectionStyled>
    </>
  )
}

export default Pricing
