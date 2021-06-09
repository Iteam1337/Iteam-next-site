import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

const services = [
  "Backend", 
  "Frontend", 
  "Fullstack", 
  "Arkitektur", 
  "Devops",
];

const ContentCard = ({
  color = "primary",
  className,
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box
    bg="light"
    border="1px solid"
    borderColor="border"
    p="20px"
    borderRadius={10}
    className={`d-flex align-items-center ${className}`}
    {...rest}
    css={`
      transition: all 0.3s ease-out;
      &:hover {
        box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow};`};
      }
    `}
  >
    <Title variant="card" mb={0}>
      {title}
    </Title>
  </Box>
);

const Feature2 = () => (
  <>
    <Section bg="#f7f7fb">
      <Container>
        <Row className="justify-content-center">
          <Col lg="9">
            <Box className="text-center" mb={[4, 5]}>
              <Title>
                Tech
              </Title>
              <Text>
                Vi hjälper ditt team att bygga tekniskt komplicerade backends, ibland med flera databaser, 
                integrationer med andra interna och externa system, realtidssystem, händelsestyrda dataflöden och höga säkerhetskrav. 
                Beroende på mognaden i teamets arbetssätt och erfarenhet kan vår roll vara autonomt team, ren 
                resursförstärkning eller som mentorer som hjälper ett existerande team att nå sin fulla potential.
              </Text>
            </Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {services.map((service) => (
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="zoom-in"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="50"
            >
              <ContentCard title={service} color="primary" />
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  </>
);

export default Feature2;