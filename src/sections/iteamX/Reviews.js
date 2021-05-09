import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgB1 from "../../assets/image/png/testimonial-brand-logo-1.png";
import imgB2 from "../../assets/image/png/testimonial-brand-logo-2.png";
import imgB3 from "../../assets/image/png/testimonial-brand-3.png";

import imgR1 from "../../assets/image/jpeg/l8-testimonial-user-image-1.jpg";
import imgR2 from "../../assets/image/jpeg/l8-testimonial-user-image-2.jpg";
import imgR3 from "../../assets/image/jpeg/l8-testimonial-user-image-3.jpg";

const ContentCard = ({
  className,
  imageBrand = imgB1,
  image,
  name,
  company,
  children,
  ...rest
}) => (
  <Box
    minHeight={["320px", null, `400px`]}
    borderColor="border"
    borderRadius={10}
    className={`d-flex flex-column ${className}`}
    {...rest}
    aos="fade-left"
    data-aos-delay="500"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    <Box className="text-center">
      <img src={imageBrand} alt="" className="img-fluid" />
    </Box>
    <Text color="lightShade" mt={4} mb={3} className="text-center mb-0">
      {children}
    </Text>
    <Box className={`mt-auto`}>
      <Box className="text-center">
        <img
          src={image}
          alt=""
          className="img-fluid"
          css={`
            border-radius: 500px;
          `}
        />
      </Box>
      <Box className="flex-grow-1 text-center" mt={3}>
        <Title color="light" variant="card" mb={1}>
          {name}
        </Title>
        <Text variant="small" color="lightShade" opacity={0.5}>
          {company}
        </Text>
      </Box>
    </Box>
  </Box>
);

const Reviews = () => {
  return (
    <>
      <Section bg="dark">
        <Container>
          <Row className="justify-content-center mt-3">
            <Col lg="4" md="6" className="mb-5 mb-lg-0">
              <ContentCard
                name="Troy Patrick"
                company="CEO at CoWorks"
                image={imgR1}
                imageBrand={imgB1}
              >
                "You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                change and click save."
              </ContentCard>
            </Col>
            <Col lg="4" md="6" className="mb-5 mb-lg-0">
              <ContentCard
                name="Paromita Haque"
                company="CEO at CoWorks"
                image={imgR2}
                imageBrand={imgB2}
              >
                "Simply the best. Better than all the rest. I’d recommend this
                product to beginners and advanced users."
              </ContentCard>
            </Col>
            <Col lg="4" md="6" className="mb-5 mb-lg-0">
              <ContentCard
                name="Trashee Habbard"
                company="CEO at CoWorks"
                image={imgR3}
                imageBrand={imgB3}
              >
                "Must have book for students, who want to be Product Designer,
                UX Designer, or Interaction Designer."
              </ContentCard>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Reviews;
