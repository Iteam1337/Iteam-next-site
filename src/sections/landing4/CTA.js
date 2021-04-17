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
              <Title color="light">Build Fast, Launch Faster</Title>
              <Text mb={4} color="light" opacity={0.7}>
                Create custom landing pages with Omega that converts more
                visitors than any website.
              </Text>
              <div className="d-flex flex-column align-items-center pt-3">
                <Button mb={2}>Start 14 Days Free Trial</Button>
                <Text
                  variant="small"
                  fontSize={"14px"}
                  color="light"
                  opacity={0.7}
                >
                  No credit card required
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
