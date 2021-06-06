import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  Section,
  Box,
  Title,
  Text,
  Button,
  List,
  ImgContainer,
} from "../../components/Core";

import imgCase1 from "../../assets/image/jpeg/case-details--details.jpg";
import imgCase2 from "../../assets/image/jpeg/case-details-half-single.jpg";
import imgCase3 from "../../assets/image/jpeg/case-details-half-single-2.jpg";

const CaseDetails = () => (
  <>
    <Section className="position-relative" borderBottom="1px solid #eae9f2;">
      <Container>
        <ImgContainer className="text-center" pb={["50px", null, "75px"]}>
          <img src={imgCase1} alt="" className="img-fluid" />
        </ImgContainer>

        <Row>
          <Col lg="12" xl="10" className="offset-xl-1">
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Client Brief
              </Title>
              <Text variant="small">
                A Senior Data Engineer provides technical and delivery
                leadership for a team of developers working on data integration
                and processing projects. This role will work with stakeholders
                and other developers to design and implement technical data
                solutions for the business in a way that balances quality, cost,
                time and maintainability.
              </Text>
            </Box>
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Client Brief
              </Title>
              <Text variant="small">
                A Senior Data Engineer provides technical and delivery
                leadership for a team of developers working on data integration
                and processing projects. This role will work with stakeholders
                and other developers to design and implement technical data
                solutions for the business in a way that balances quality, cost,
                time and maintainability.
              </Text>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col lg="6" className="mb-lg-0 mb-30">
            <Box>
              <img src={imgCase2} alt="" className="img-fluid" />
            </Box>
          </Col>
          <Col lg="6">
            <Box>
              <img src={imgCase3} alt="" className="img-fluid" />
            </Box>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="12" xl="10" className="offset-xl-1 pt-4">
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Solutions
              </Title>
              <Text variant="small" mb={3}>
                A Senior Data Engineer provides technical and delivery
                leadership for a team of developers working on data integration
                and processing projects. This role will work with stakeholders
                and other developers to design and implement.
              </Text>
              <List>
                <li>
                  This role will work with stakeholders and other developers to
                  design and implement.
                </li>
                <li>
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without any design or custom coding.
                </li>
                <li>
                  You might be surprised to know that not only do we run some of
                  the biggest websites in the world; we’re also growing really
                  fast! We have close to 600 staff and contractors worldwide,
                  adding more than 100 people to the business, which grows year
                  on year, since 2017.
                </li>
              </List>
            </Box>
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Learnings
              </Title>
              <Text variant="small">
                A Senior Data Engineer provides technical and delivery
                leadership for a team of developers working on data integration
                and processing projects. This role will work with stakeholders
                and other developers to design and implement technical data
                solutions for the business in a way that balances quality, cost,
                time and maintainability.
              </Text>
            </Box>
            <Box>
              <Button>Check live website</Button>
            </Box>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default CaseDetails;
