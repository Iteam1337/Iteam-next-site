import React from 'react'
import styled from 'styled-components'

import { Box, Badge } from '../../components/Core'

import iconQuote from '../../assets/image/png/quote-icon.png'

const Post = styled(Box)`
  overflow: hidden;
  font-size: 1rem;

  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  ul,
  ol {
    margin-bottom: 1.25rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.25rem;
    margin-bottom: 1.25rem;
    color: ${({ theme }) => theme.colors.heading} !important;
  }
  ul li {
    list-style: disc outside none;
    margin-left: 1em;
    font-weight:400;
    font-size: 18px;
    margin-bottom: 17px;
    letter-spacing: -0.56px;
    line-height: 30px;
  }
  ol li {
    list-style-type: decimal;
  }
  
  p {
    font-weight: 400;
  }


  }
  a {
    color: ${({ theme }) => theme.colors.info};
  }

  blockquote {
    margin-bottom: 1.25rem;
    padding-left: 50px;
    position: relative;
    color: ${({ theme }) => theme.colors.text} !important;
    font-size: 20px;
    &::after {
      content: url(${iconQuote});
      display: inline-block;
      min-width: 28px;
      max-width: 28px;
      margin-top: 8px;
      margin-right: 23px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  img,
  iframe,
  video {
    max-width: 100%;
    margin-bottom: 2rem;
    display: block;
  }
`

const BadgePost = ({ children }) => (
  <Badge
    mr={3}
    mb={3}
    bg="#eae9f2"
    color="#696871"
    fontSize="16px"
    px={3}
    py={2}
  >
    {children}
  </Badge>
)

const PostDetails = ({ post }) => (
  <>
    {/* <!-- Blog section --> */}
    <Post>
      {post.image && (
        <div>
          <img src={post.image.src} alt={post.title} />
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </Post>
    <Box className="d-flex" mt={4}>
      {post.tags?.map((tag) => (
        <BadgePost>{tag}</BadgePost>
      ))}
    </Box>
  </>
)

export default PostDetails
