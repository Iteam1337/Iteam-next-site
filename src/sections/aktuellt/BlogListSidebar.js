import React from "react"
import { Row, Col } from "react-bootstrap"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"

import { Box } from "../../components/Core"
import PostCard from "../../components/PostCard"
import Pagination, { PageItem } from "../../components/Pagination"

const BlogList = ({ posts }) => (
  <>
    {/* <!-- Blog section --> */}

    <Row className="align-items-center justify-content-center">
      {posts.map((post) => (
        <Col lg="6" className="mb-5">
          <PostCard
            img={post.img}
            preTitle={post.date}
            title={post.title}
            readMore
          >
            {post.intro}
          </PostCard>
        </Col>
      ))}
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
)

export default BlogList
