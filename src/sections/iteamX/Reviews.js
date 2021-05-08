import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Span } from "../../components/Core";
import ReviewCard from "../../components/ReviewCard";

import imgR1 from "../../assets/image/jpeg/reviewer1.jpg";
import imgR2 from "../../assets/image/jpeg/reviewer2.jpg";
import imgR3 from "../../assets/image/jpeg/reviewer3.jpg";

const Reviews = () => {
  return (
    <>
      <Section bg="#f7f7fb" borderBottom="1px solid #EAE9F2;">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="6" className="text-center">
              <Box className="text-center">
                <Title>Reviews from readers</Title>
              </Box>
              <Text mb={4}>
                Create custom landing pages with Omega that converts more
                visitors than any website.
              </Text>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <ReviewCard
                name="Jonathan Taylor"
                company="From Amazon.com"
                image={imgR1}
                stars={5}
              >
                "You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                change and click save."
              </ReviewCard>
            </Col>
            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <ReviewCard
                name="Paromita Haque"
                company="From Amazon.com"
                image={imgR2}
                stars={4}
              >
                "Simply the best. Better than all the rest. I’d recommend this
                product to beginners and advanced users."
              </ReviewCard>
            </Col>
            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <ReviewCard
                name="Trashee Habbard"
                company="From Amazon.com"
                image={imgR3}
                stars={5}
              >
                "Must have book for students, who want to be Product Designer,
                UX Designer, or Interaction Designer."
              </ReviewCard>
            </Col>
          </Row>
          <p
            className="mb-0 mt-5"
            css={`
              font-size: 16px;
              font-weight: 500;
              letter-spacing: -0.5px;
              text-align: center;
            `}
          >
            <a href="/" target="_blank" className="text-decoration-none">
              <Span color="secondary">
                Check all 3,583 reviews on Amazon.com
              </Span>
            </a>
          </p>
        </Container>
      </Section>
    </>
  );
};

export default Reviews;
