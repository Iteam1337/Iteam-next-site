import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text } from "../components/Core";
import ReviewCard from "../components/ReviewCard";

import imgR1 from "../assets/image/jpeg/reviewer1.jpg";
import imgR2 from "../assets/image/jpeg/reviewer2.jpg";
import imgR3 from "../assets/image/jpeg/reviewer3.jpg";
import imgR4 from "../assets/image/jpeg/reviewer4.jpg";
import imgR5 from "../assets/image/jpeg/reviewer5.jpg";
import imgR6 from "../assets/image/jpeg/reviewer6.jpg";
import imgR7 from "../assets/image/jpeg/reviewer7.jpg";
import imgR8 from "../assets/image/jpeg/reviewer8.jpg";
import imgR9 from "../assets/image/jpeg/reviewer9.jpg";

const Reviews = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="9">
                <Title variant="hero">Reviews from readers</Title>
                <Text>
                  Create custom landing pages with Omega that converts{" "}
                  <br className="d-none d-md-block"></br> more visitors than any
                  website.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section>
          <Container>
            <Row className="justify-content-center">
              <Col lg="4" md="6" className="mb-5">
                <ReviewCard
                  name="Jonathan Taylor"
                  company="From Amazon.com"
                  image={imgR1}
                  stars={5}
                >
                  "You made it so simple. My new site is so much faster and
                  easier to work with than my old site. I just choose the page,
                  make the change and click save."
                </ReviewCard>
              </Col>
              <Col lg="4" md="6" className="mb-5">
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
              <Col lg="4" md="6" className="mb-5">
                <ReviewCard
                  name="Delia Sanders"
                  company="From Amazon.com"
                  image={imgR3}
                  stars={5}
                >
                  "Must have book for students, who want to be Product Designer,
                  UX Designer, or Interaction Designer."
                </ReviewCard>
              </Col>
              <Col lg="4" md="6" className="mb-5">
                <ReviewCard
                  name="Seth Mak"
                  company="From Amazon.com"
                  image={imgR4}
                  stars={4}
                >
                  "You made it so simple. My new site is so much faster and
                  easier to work with than my old site. I just choose the page,
                  make the change and click save."
                </ReviewCard>
              </Col>
              <Col lg="4" md="6" className="mb-5">
                <ReviewCard
                  name="Richard Bell"
                  company="From Amazon.com"
                  image={imgR5}
                  stars={5}
                >
                  "Simply the best. Better than all the rest. I’d recommend this
                  product to beginners and advanced users."
                </ReviewCard>
              </Col>
              <Col lg="4" md="6" className="mb-5">
                <ReviewCard
                  name="Trashee Habbard"
                  company="From Amazon.com"
                  image={imgR6}
                  stars={4}
                >
                  "Must have book for students, who want to be Product Designer,
                  UX Designer, or Interaction Designer."
                </ReviewCard>
              </Col>
              <Col lg="4" md="6" className="mb-5">
                <ReviewCard
                  name="Jon Bard"
                  company="From Amazon.com"
                  image={imgR7}
                  stars={5}
                >
                  "Simply the best. Better than all the rest. I’d recommend this
                  product to beginners and advanced users."
                </ReviewCard>
              </Col>
              <Col lg="4" md="6" className="mb-5">
                <ReviewCard
                  name="Jack Habbard"
                  company="From Amazon.com"
                  image={imgR8}
                  stars={4}
                >
                  "Must have book for students, who want to be Product Designer,
                  UX Designer, or Interaction Designer."
                </ReviewCard>
              </Col>
              <Col lg="4" md="6" className="mb-5">
                <ReviewCard
                  name="Trashee Nafir"
                  company="From Amazon.com"
                  image={imgR9}
                  stars={5}
                >
                  "Must have book for students, who want to be Product Designer,
                  UX Designer, or Interaction Designer."
                </ReviewCard>
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Reviews;
