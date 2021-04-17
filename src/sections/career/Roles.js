import React from "react";
import Link from "next/link";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Text, Badge } from "../../components/Core";
import styled from "styled-components";

const Card = styled.a`
  justify-content: flex-start;
  min-height: 100%;
  box-shadow: 0 2px 4px rgba(14, 86, 124, 0.17);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 35px;
  transition: 0.4s;
  border-radius: 10px;
  &:hover {
    box-shadow: 0 32px 84px rgba(14, 86, 124, 0.17);
    color: #0056b3 !important;
    text-decoration: none;
    .title {
      color: #0056b3 !important;
    }
  }
`;

const Location = styled.span`
  color: #8c97ac;
  font-size: 16px;
  font-weight: 300;
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

const BadgeStyled = styled(Badge)`
  background-color: ${({ theme, bg }) => rgba(theme.colors[bg], 0.15)};
  color: ${({ theme, bg }) => theme.colors[bg]};
  border: none;
  font-weight: 300;
`;

const RolesCard = ({
  color = "primary",
  title,
  location,
  type,
  children,
  ...rest
}) => (
  <Link href="/">
    <Card className="card-job top-only" {...rest}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Location>
          <i className="icon icon-pin-3 mr-1"></i> {location}
        </Location>
        <BadgeStyled bg={color}>{type}</BadgeStyled>
      </div>
      <Title variant="card" className="title" fontWeight={500}>
        {title}
      </Title>
    </Card>
  </Link>
);

const Roles = () => (
  <>
    <Section bg="#f7f7fb">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" className="text-center">
            <div>
              <Title>Open roles</Title>
              <Text>
                These companies release their own versions of the operating
                systems with minor changes, and yet always.
              </Text>
            </div>
          </Col>
        </Row>
        <Row className="mt-lg-5">
          <Col lg="4" md="6" className="pt-4">
            <RolesCard
              color="secondary"
              title="Senior UX Designer"
              type="Full-time"
              location="South Haven, USA"
            />
          </Col>
          <Col lg="4" md="6" className="pt-4">
            <RolesCard
              color="primary"
              title="Senior UI Developer"
              type="Full-time"
              location="South Haven, USA"
            />
          </Col>
          <Col lg="4" md="6" className="pt-4">
            <RolesCard
              color="success"
              title="Senior QA Engineer"
              type="Remote"
              location="South Haven, USA"
            />
          </Col>
          <Col lg="4" md="6" className="pt-4">
            <RolesCard
              color="secondary"
              title="Senior UI Developer"
              type="Part-time"
              location="South Haven, USA"
            />
          </Col>
          <Col lg="4" md="6" className="pt-4">
            <RolesCard
              color="primary"
              title="Senior QA Engineer"
              type="Remote"
              location="South Haven, USA"
            />
          </Col>
          <Col lg="4" md="6" className="pt-4">
            <RolesCard
              color="success"
              title="Senior UX Designer"
              type="Full-time"
              location="South Haven, USA"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Roles;
