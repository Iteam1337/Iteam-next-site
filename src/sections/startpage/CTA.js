import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Box, Text } from "../../components/Core";

const CTA = () => (
  <>
    {/* <!-- CTA section --> */}
    <Box bg="dark" className="position-relative" py={[4, null, null, 5, 6]}>
      <Container>
        <Row className="justify-content-center">
          <Col md="8" lg="7">
            <Box className="text-center">
              <Title color="light">We move fast and fix things</Title>
              <Text mb={4} color="light" opacity={0.7}>
                Jobbar du med oss på Iteam vet du att lösningen kommer bli bra, användbar och värdefull.
              </Text>
              <div className="d-flex flex-column align-items-center pt-3">
                <Button mb={2}>Boka ett team nu</Button>
                <Text
                  variant="small"
                  fontSize={"14px"}
                  color="light"
                  opacity={0.7}
                >
                  Enkla och korta avtal
                </Text>
              </div>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  </>
);

export default CTA;
