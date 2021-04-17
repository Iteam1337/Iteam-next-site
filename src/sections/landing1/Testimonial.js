import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, A, Span } from "../../components/Core";

import imgCustomer1 from "../../assets/image/jpeg/l1-customer1.jpg";
import imgCustomer2 from "../../assets/image/jpeg/l1-customer2.jpg";
import imgCustomer3 from "../../assets/image/jpeg/l1-customer3.jpg";

const ContentCard = ({
  className,
  image,
  name,
  company,
  children,
  ...rest
}) => (
  <Box
    bg="light"
    border="1px solid"
    borderColor="border"
    p="25px"
    borderRadius={10}
    className={`${className}`}
    {...rest}
  >
    <Box className={`d-flex justify-content-between`}>
      <Box className="d-flex justify-content-center align-items-start" mr={3}>
        <img src={image} alt="" className="img-fluid" />
      </Box>
      <div className="flex-grow-1">
        <Title variant="card" mb={0}>
          {name}
        </Title>
        <Text fontSize={2}>{company}</Text>
      </div>
      <A href="#" fontSize="27px">
        <Span color="secondary">
          <i className="fab fa-twitter"></i>
        </Span>
      </A>
    </Box>
    <Text color="dark" mt={4}>
      {children}
    </Text>
  </Box>
);

const Testimonial = () => (
  <>
    {/* <!-- testimonial section --> */}
    <Section>
      <Container>
        <Box pb={[4, null, null, 5]}>
          <Row className="justify-content-center">
            <Col lg="7" xl="6">
              <div className="section-title text-center">
                <Title>
                  Customers are <br className="d-none d-md-block" /> loving
                  Omega
                </Title>
              </div>
            </Col>
          </Row>
        </Box>
        <Row className="justify-content-center">
          <Col md="6" lg="4" className="mb-5">
            <ContentCard
              name="Jonathan Taylor"
              company="CEO at Creativex"
              image={imgCustomer1}
            >
              OMG! I cannot believe that I have got a brand new landing page
              after getting{" "}
              <A href="#">
                <Span color="secondary"> @Omega</Span>
              </A>
              ...
            </ContentCard>
          </Col>
          <Col md="6" lg="4" className="mb-5">
            <ContentCard
              name="Gavin Park"
              company="CEO at Orbital"
              image={imgCustomer2}
            >
              <A href="#">
                <Span color="secondary"> @Omega</Span>
              </A>{" "}
              is great for creating landing pages within minutes! It actually
              takes less time…
            </ContentCard>
          </Col>
          <Col md="6" lg="4" className="mb-5">
            <ContentCard
              name="Betty Norton"
              company="Freelance Designer"
              image={imgCustomer3}
            >
              Whenever I need to create a new landing page for clients,{" "}
              <A href="#">
                <Span color="secondary"> @Omega</Span>
              </A>{" "}
              is my solution…
            </ContentCard>
          </Col>

          <Col xs="12" className="text-center mt-3">
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <A
                href=""
                fontSize={2}
                fontWeight={500}
                className="d-inline-flex align-items-center"
              >
                <Span color="secondary">
                  <i className="fas fa-comment-alt mr-2"></i>
                  <span>See all testimonials</span>
                </Span>
              </A>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Testimonial;
