import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box } from "../components/Core";

import PostDetails from "../sections/blog/PostDetails";
import Comments from "../sections/blog/Comments";
import Sidebar from "../sections/blog/Sidebar";

const BlogDetails = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="12">
                <Title variant="hero">
                  How To Blow Through Capital{" "}
                  <br className="d-none d-lg-block" /> At An Incredible Rate
                </Title>
                <Box className="d-flex justify-content-center">
                  <Text mr={3}>
                    <Link href="/">
                      <a>Jan 14, 2020</a>
                    </Link>
                  </Text>
                  <Text mr={3}>
                    <Link href="/">
                      <a>Technology</a>
                    </Link>
                  </Text>
                  <Text>
                    <Link href="/">
                      <a>David Jones</a>
                    </Link>
                  </Text>
                </Box>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section className="pb-0">
          <Container>
            <Row>
              <Col lg="8" className="mb-5">
                <PostDetails />
              </Col>
              <Col lg="4" className="">
                <Sidebar />
              </Col>
            </Row>
          </Container>
        </Section>
        <Comments />
      </PageWrapper>
    </>
  );
};
export default BlogDetails;
