import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import { Box } from "../../components/Core";
import PostCard from "../../components/PostCard";
import Pagination, { PageItem } from "../../components/Pagination";

import imgB1 from "../../assets/image/jpeg/blog-post--img-10.jpg";
import imgB2 from "../../assets/image/jpeg/blog-post--img-7.jpg";
import imgB3 from "../../assets/image/png/blog-post-list--img-2.png";
import imgB4 from "../../assets/image/jpeg/blog-post--img-8.jpg";
import imgB5 from "../../assets/image/jpeg/blog-post--img-9.jpg";

const BlogList = () => (
  <>
    {/* <!-- Blog section --> */}

    <Row className="align-items-center justify-content-center">
      <Col lg="6" className="mb-5">
        <PostCard
          img={imgB1}
          preTitle="Nov 14, 2020"
          title="How did we get 1M+ visitors in 30 days without anything!"
          readMore
        >
          Throwing consider dwelling bachelor joy her proposal laughter.
          Raptures returned disposed one entirely her men ham.
        </PostCard>
      </Col>
      <Col lg="6" className="mb-5">
        <PostCard
          img={imgB2}
          preTitle="Nov 14, 2020"
          title="How did we get 1M+ visitors in 30 days without anything!"
          readMore
        >
          Throwing consider dwelling bachelor joy her proposal laughter.
          Raptures returned disposed one entirely her men ham.
        </PostCard>
      </Col>
      <Col lg="12" className="mb-5">
        <PostCard
          horizontal
          img={imgB3}
          preTitle="Nov 14, 2020"
          title="How did we get 1M+ visitors in 30 days without anything!"
          readMore
        >
          Throwing consider dwelling bachelor joy her proposal laughter.
          Raptures returned disposed one entirely her men ham.
        </PostCard>
      </Col>
      <Col lg="6" className="mb-5">
        <PostCard
          img={imgB4}
          preTitle="Nov 14, 2020"
          title="How did we get 1M+ visitors in 30 days without anything!"
          readMore
        >
          Throwing consider dwelling bachelor joy her proposal laughter.
          Raptures returned disposed one entirely her men ham.
        </PostCard>
      </Col>
      <Col lg="6" className="mb-5">
        <PostCard
          img={imgB5}
          preTitle="Nov 14, 2020"
          title="How did we get 1M+ visitors in 30 days without anything!"
          readMore
        >
          Throwing consider dwelling bachelor joy her proposal laughter.
          Raptures returned disposed one entirely her men ham.
        </PostCard>
      </Col>
    </Row>
    <Box className="d-flex justify-content-start" mt={4}>
      <Pagination>
        <PageItem>
          <FaAngleLeft />
        </PageItem>
        <PageItem>1</PageItem>
        <PageItem>2</PageItem>
        <PageItem>3</PageItem>
        <PageItem>...</PageItem>
        <PageItem>9</PageItem>
        <PageItem>
          <FaAngleRight />
        </PageItem>
      </Pagination>
    </Box>
  </>
);

export default BlogList;
