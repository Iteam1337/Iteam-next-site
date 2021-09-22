import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import { Title, Section, Box, Text, Button, Input } from "../../components/Core"

import imgCustomer1 from "../../assets/image/jpeg/comment-user-1.jpg"
import imgCustomer2 from "../../assets/image/jpeg/comment-user-2.jpg"
import imgCustomer3 from "../../assets/image/jpeg/comment-user-3.jpg"

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
    p="25px"
    borderRadius={10}
    className={`${className}`}
    css={`
      box-shadow: 0 2px 4px rgba(14, 86, 124, 0.17) !important;
    `}
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
    </Box>
    <Text fontSize="18px" mt={3}>
      {children}
    </Text>
  </Box>
)

const Comments = () => (
  <>
    {/* <!-- Comments section --> */}
    <Section bg="#f7f7fb">
      <Container>
        <Row>
          <Col lg="8">
            <Box pb={[3, null, null, 4]}>
              <Title fontSize="24px" variant="card">
                Share your response
              </Title>
            </Box>
            <form>
              <Box mb={3}>
                <Input
                  border="none"
                  p="1rem 1.75rem"
                  placeholder="Your name"
                  css={`
                    box-shadow: 0 2px 4px rgba(14, 86, 124, 0.17) !important;
                  `}
                />
              </Box>
              <Box mb={3}>
                <Input
                  border="none"
                  p="1rem 1.75rem"
                  type="email"
                  placeholder="Your email"
                  rows={5}
                  css={`
                    box-shadow: 0 2px 4px rgba(14, 86, 124, 0.17) !important;
                  `}
                />
              </Box>
              <Box mb={3}>
                <Input
                  border="none"
                  p="1rem 1.75rem"
                  height="150px"
                  as="textarea"
                  placeholder="Your message ..."
                  style={{
                    boxShadow: `0 2px 4px rgba(14, 86, 124, 0.17)`,
                  }}
                />
              </Box>

              <Box mb={5}>
                <Button type="submit" borderRadius={10}>
                  Submit response
                </Button>
              </Box>
            </form>

            <Box pb={[3, null, null, 4]}>
              <Title fontSize="24px" variant="card">
                05 Responses on this post
              </Title>
            </Box>
            <Row className="justify-content-center">
              <Col lg="12" className="mb-4">
                <ContentCard
                  name="Chinelo Chyke"
                  company="Jan 20, 2020"
                  image={imgCustomer1}
                >
                  Well said! I think the point about changing companies is spot
                  on and I’ve seen many friends double their salaries simply by
                  jumping ship. I know companies hate that employees stay for so
                  little time (in SF the average tenure is 1.5 years), but then
                  they should make pay raises more significant.
                </ContentCard>
              </Col>
              <Col lg="12" className="mb-4">
                <ContentCard
                  name="Abbie Wilson"
                  company="Jan 20, 2020"
                  image={imgCustomer2}
                >
                  I totally agree, as it happened like this for me too.
                </ContentCard>
              </Col>
              <Col lg="12" className="mb-4">
                <ContentCard
                  name="Betty Norton"
                  company="Jan 20, 2020"
                  image={imgCustomer3}
                >
                  Great article. I was finding diffculty in getting pay raise
                  even having experience in digital marketing for 3 years & 10
                  months
                </ContentCard>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)

export default Comments
