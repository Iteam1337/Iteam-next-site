import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Button, Section, Typography } from '../../components/Core'

const CTA = () => (
  <>
    <Section bg="secondary" className="position-relative">
      <Container>
        <Row>
          <Col lg="8" xl="7">
            <div>
              <Typography.H2 className="tw-text-dark-gray">
                Enjoy every beat.<br className="d-none d-sm-block"></br> Get a
                new headphone.
              </Typography.H2>
            </div>
          </Col>
          <Col
            lg="4"
            xl="5"
            className="d-flex align-items-center justify-content-lg-end mt-4 mt-lg-0"
          >
            <div>
              <Button bg="warning" color="dark">
                Buy Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)

export default CTA
