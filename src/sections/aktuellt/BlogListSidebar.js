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

const BlogList = ({ posts }) => (
  <>
    {/* <!-- Blog section --> */}

    <Row className="align-items-center justify-content-center">
      {posts.map(post => 
        <Col lg="6" className="mb-5">
        <PostCard
          img={imgB1}
          preTitle={post.date}
          title={post.title}
          readMore
        >
          {post.intro}
        </PostCard>
      </Col>
      )}
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
