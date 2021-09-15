import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import PageWrapper from "../components/PageWrapper"
import { Section, Title, Text, Box, List } from "../components/Core"

const TermsConditions = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section>
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg="9" xl="8">
                <Title variant="hero" className="text-center">
                  Terms & Conditions
                </Title>
                <Text variant="small">
                  By accessing and placing an order with UXTheme, you confirm
                  that you are in agreement with and bound by the terms and
                  conditions contained in the Terms Of Use outlined below. These
                  terms apply to the entire website and any email or other type
                  of communication between you and UXTheme. Under no
                  circumstances shall UXTheme team be liable for any direct,
                  indirect, special, incidental or consequential damages,
                  including, but not limited to, loss of data or profit, arising
                  out of the use, or the inability to use, the materials on this
                  site, even if UXTheme team or an authorized representative has
                  been advised of the possibility of such damages. If your use
                  of materials from this site results in the need for servicing,
                  repair or correction of equipment or data, you assume any
                  costs thereof. UXTheme will not be responsible for any outcome
                  that may occur during the course of usage of our resources.We
                  reserve the rights to change prices and revise the resources
                  usage policy in any moment.
                </Text>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    License
                  </Title>
                  <Text variant="small">
                    By purchasing or downloading resource (“item” or “file”) you
                    are being granted a license to use these files for specific
                    uses under certain conditions. Ownership remains with
                    UXTheme, and you are required to abide by the following
                    licensing terms.
                  </Text>
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    Security
                  </Title>
                  <List>
                    <li>
                      You have rights for royalty free use of our resources for
                      any or all of your personal and commercial projects.
                    </li>
                    <li>
                      You are not required to attribute or link to UXTheme in
                      any of projects.
                    </li>
                    <li>
                      We reserve the rights to change prices and revise the
                      resources usage policy in any moment.
                    </li>
                  </List>
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    Embedded content from other websites
                  </Title>
                  <Text variant="small">
                    Articles on this site may include embedded content (e.g.
                    videos, images, articles, etc.). Embedded content from other
                    websites behaves in the exact same way as if the visitor has
                    visited the other website.
                  </Text>
                  <Text variant="small">
                    These websites may collect data about you, use cookies,
                    embed additional third-party tracking, and monitor your
                    interaction with that embedded content, including tracking
                    your interaction with the embedded content if you have an
                    account and are logged in to that website.
                  </Text>
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    Changes about terms
                  </Title>
                  <Text variant="small">
                    If we change our terms of use we will post those changes on
                    this page. Registered users will be sent an email that
                    outlines changes made to the terms of use.
                  </Text>
                </Box>
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  )
}
export default TermsConditions
