import React from "react";
import styled from "styled-components";
import Gravatar from "react-gravatar";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import team from "./team.json";
import Link from "next/link";

const CardImage = styled.div`
  max-width: 160px;
  min-width: 160px;
  min-height: 160px;
  max-height: 160px;
  overflow: hidden;
  border-radius: 500px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 29px;
`;

const TeamCard = ({
  email,
  name,
  title,
  status,
  phoneNumber,
  username = "",
  path,
  ...rest
}) => (
  <Box
    className="text-center"
    pt="15px"
    px="30px"
    borderRadius={10}
    mb={4}
    {...rest}
  >
    <Link href={path}>
      <CardImage>
        <Gravatar email={email} className="img-fluid" size={200} />
      </CardImage>
    </Link>
    <div className="text-center">
      <Title variant="card" fontSize="24px" letterSpacing={-0.75} my={1}>
        {name}
      </Title>
      <Text fontSize={2} lineHeight={1.75}>
        {status}
      </Text>
      <Text fontSize={2} lineHeight={1.75}>
        {title}
      </Text>
      {phoneNumber && (
        <a href={`tel:${phoneNumber}`}>
          <Text fontSize={1} lineHeight={1.25}>
            {phoneNumber}
          </Text>
        </a>
      )}
      {email && (
        <a href={`mailto:${email}`}>
          <Text fontSize={1} lineHeight={1.25}>
            {email}
          </Text>
        </a>
      )}
    </div>
  </Box>
);

const Team = () => (
  <>
    {/* <!-- Team section --> */}
    <Section className="position-relative pt-5" id="medarbetare">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" className="text-center pb-3">
            <div id="medarbetare" className="">
              <Title>Medarbetare</Title>
              <Text>
                Här hittar du oss som jobbar på Iteam, tveka inte att höra av
                dig!
              </Text>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {team
            .sort((a, b) => a.fullname > b.fullname)
            .map(({ fullname, title, email, phoneNumber, status, path }) => (
              <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4" key={email}>
                <TeamCard
                  email={email}
                  name={fullname}
                  title={title}
                  status={status}
                  path={path}
                  phoneNumber={phoneNumber}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </Section>
  </>
);

export default Team;
