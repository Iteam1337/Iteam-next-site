import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { Section, Box, Text } from "../../components/Core";
import Rating from "../../components/Rating";

const ContentCard = ({
  className,
  numStar = 5,
  image,
  name,
  company,
  children,
  ...rest
}) => (
  <Box className={`${className}`} {...rest}>
    <Rating
      numStar={numStar}
      color="warning"
      pb={2}
      css={`
        font-size: 21px;
      `}
    />

    <Text color="light" mt={3} mb={3} className="font-italic">
      {children}
    </Text>
    <Box className={`d-flex justify-content-between mt-auto`} pt={2}>
      <div className="flex-grow-1">
        <Text
          color="lightShade"
          fontSize="16px"
          fontWeight={300}
          lineHeight="1"
        >
          {name}
        </Text>
      </div>
    </Box>
  </Box>
);

const Reviews = () => {
  return (
    <>
      <Section bg="secondary" borderBottom="1px solid #EAE9F2;">
        <Container>
          <Row className="justify-content-center mt-3">
            <Col md="6" className="mb-5 mb-lg-0">
              <ContentCard name="Jonathan Taylor" numStar={4.5}>
                "OMG! I cannot believe that I have got a brand new landing page
                after getting Omega. It was super easy to edit and publish.
                Everyone should try it!"
              </ContentCard>
            </Col>
            <Col md="6" className="mb-5 mb-lg-0">
              <ContentCard name="Paromita Haque" numStar={3}>
                "You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                change and click save."
              </ContentCard>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Reviews;
