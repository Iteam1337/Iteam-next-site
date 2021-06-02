import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

const SectionStyled = styled(Section)``;

const FaqCard = styled(Box)`
  padding-left: 55px;
  position: relative;
  &::before {
    content: "\f061";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    min-width: 30px;
    min-height: 30px;
    max-height: 30px;
    font-size: 15px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.light};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 500px;
    position: absolute;
    left: 0;
  }
`;

const FaqTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.light};
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.75px;
  margin-bottom: 24px;
  line-height: 2rem;
`;

const Faq = () => (
  <>
    {/* <!-- Faq section --> */}
    <SectionStyled bg="ash">
      <Container>
        <Row>
          <Col lg="6" className="mb-5">
            <FaqCard>
              <div>
                <FaqTitle>Jonna fyller i</FaqTitle>
                <Text variant="small" color="light" opacity={0.7}>
                  Absolutely. The Envato Theme license allows you to build a
                  websites for personal use or for a client. User Omega for your
                  clients.
                </Text>
              </div>
            </FaqCard>
          </Col>
          <Col lg="6" className="mb-5">
            <FaqCard>
              <div>
                <FaqTitle>Do I get free updates?</FaqTitle>
                <Text variant="small" color="light" opacity={0.7}>
                  Yes. We update all of our themes regularly, plus are
                  constantly adding new components, pages, and features to our
                  themes. Purchase once and get lifetime updates.
                </Text>
              </div>
            </FaqCard>
          </Col>
          <Col lg="6" className="mb-5">
            <FaqCard>
              <div>
                <FaqTitle>Does it work with WordPress?</FaqTitle>
                <Text variant="small" color="light" opacity={0.7}>
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without any design or custom coding.
                </Text>
              </div>
            </FaqCard>
          </Col>
          <Col lg="6" className="mb-5">
            <FaqCard>
              <div>
                <FaqTitle>Will you provide support?</FaqTitle>
                <Text variant="small" color="light" opacity={0.7}>
                  With lots of unique blocks, you can easily build a page
                  without any design or custom coding. with Omega that converts
                  more visitors than any website.
                </Text>
              </div>
            </FaqCard>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default Faq;
