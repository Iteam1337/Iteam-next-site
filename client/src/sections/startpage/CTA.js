import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { Title, Button, Box, Text } from '../../components/Core'
import { getRouteNameFromPageType } from '../../utils/helpers'

const CTA = ({ content }) => {
  return (
    <>
      {/* <!-- CTA section --> */}
      <Box bg="dark" className="position-relative" py={[4, null, null, 5, 6]}>
        <Container>
          <Row className="justify-content-center">
            <Col md="8" lg="7">
              <Box className="text-center">
                <Title color="light">{content?.title}</Title>
                <div className="d-flex flex-column align-items-center pt-3">
                  <Box>
                    <Link
                      href={getRouteNameFromPageType(
                        content?.cta?.reference?._ref
                      )}
                    >
                      <Button>{content?.cta?.title}</Button>
                    </Link>
                  </Box>
                </div>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </>
  )
}

export default CTA
