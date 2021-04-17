import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Title, Button, Box, Badge, List } from "../components/Core";
import styled from "styled-components";

const BoxStyled = styled(Box)`
  .block-title {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 21px;
    font-weight: 700;
    line-height: 34px;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
    margin-bottom: 15px;
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

const CareerDetails = () => {
  return (
    <>
      <PageWrapper footerDark>
        <BoxStyled>
          <div className="pt-5 mt-5"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg="11" className="mb-4 mb-lg-5">
                <Box pt={["40px", null, null, "75px"]}>
                  <Box
                    maxWidth="275px"
                    mx="auto"
                    className="d-flex justify-content-between align-items-center mb-4"
                  >
                    <Location>
                      <i className="icon icon-pin-3 mr-1"></i> South Haven, USA
                    </Location>
                    <BadgeStyled bg="secondary">Full-time</BadgeStyled>
                  </Box>
                  <Box>
                    <Title variant="hero">Senior Software Engineer</Title>
                  </Box>
                </Box>
              </Col>
              <Col lg="8">
                <Box className="mb-5">
                  <div className="mb-5">
                    <p>
                      Headquartered in Melbourne, Australia, Envato is a
                      completely online company with an ecosystem of sites and
                      services to help people get creative. We’ve consistently
                      been named as one of the Best Places to Work in Australia,
                      since 2015, in the BRW Awards, and we’ve also been awarded
                      the title of Australia's Coolest Company for Women and
                      Diversity by JobAdvisor.
                    </p>
                    <p>
                      Envato was found in 2006 and, since then, we’ve helped a
                      community of creative sellers earn more than $500 Million.
                      Millions of people around the world choose our
                      marketplace, studio and courses to buy files, hire
                      freelancers, or learn the skills needed to build websites,
                      videos, apps, graphics and more. Find out more at Envato
                      Market, Envato Elements, Envato Sites, Envato Studio and
                      Tuts+.
                    </p>
                    <p>
                      You might be surprised to know that not only do we run
                      some of the biggest websites in the world; we’re also
                      growing really fast! We have close to 600 staff and
                      contractors worldwide, adding more than 100 people to the
                      business, year on year, since 2017.
                    </p>
                  </div>
                  <div className="mb-5">
                    <h2 className="block-title mb-2">What you’ll be doing</h2>
                    <p>
                      A Senior Data Engineer provides technical and delivery
                      leadership for a team of developers working on data
                      integration and processing projects. This role will work
                      with stakeholders and other developers to design and
                      implement technical data solutions for the business in a
                      way that balances quality, cost, time and maintainability.
                    </p>
                  </div>
                  <div className="mb-5">
                    <h2 className="block-title mb-4">
                      Skills &amp; Qualifications
                    </h2>
                    <List>
                      <li>Business Intelligence solutions</li>
                      <li>Cloud computing platforms (AWS)</li>
                      <li>
                        Relevant server-side programming languages (C# .NET)
                      </li>
                      <li>
                        SQL and NoSQL database solutions (AWS Redshift and AWS
                        DynamoDB)
                      </li>
                      <li>Big data processing frameworks and concepts </li>
                      <li>DevOps practices</li>
                      <li>Serverless Architecture</li>
                      <li>*NIX operating systems</li>
                      <li>
                        Demonstrates ability to communicate effectively with the
                        rest of the team
                      </li>
                    </List>
                  </div>
                  <div className="contant-block-4">
                    <h2 className="block-title mb-3">How to apply</h2>
                    <p>
                      A Senior Data Engineer provides technical and delivery
                      leadership for a team of developers working on data
                      integration and processing projects. This role will work
                      with stakeholders and other developers to design and
                      implement technical data solutions for the business in a
                      way that balances quality, cost, time and maintainability.
                    </p>
                    <div className="pt-5">
                      <Button mb={5}>Apply for this job</Button>
                    </div>
                  </div>
                </Box>
              </Col>
            </Row>
          </Container>
        </BoxStyled>
      </PageWrapper>
    </>
  );
};
export default CareerDetails;
