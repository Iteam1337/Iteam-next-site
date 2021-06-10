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
              <Title color="light">Har du ett projekt eller en idé?</Title>
              {/* <Text mb={4} color="light" opacity={0.7}>
                Jobbar du med oss på Iteam vet du att lösningen kommer bli bra, användbar och värdefull.
              </Text> */}
              <div className="d-flex flex-column align-items-center pt-3">
                <Box>
                  <Button onClick={() => (window.location.href = "/book")}>
                    Boka möte haha
                  </Button>
                </Box>
              </div>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  </>
);

export default CTA;
