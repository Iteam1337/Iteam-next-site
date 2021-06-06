import React from "react";
import styled from "styled-components";

import { Box, Badge } from "../../components/Core";

import imgB1 from "../../assets/image/jpeg/blog-details-img-1.jpg";
import iconQuote from "../../assets/image/png/quote-icon.png";

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
  ol li {
    list-style-type: decimal;
  }

  ul li {
    list-style-type: disc;
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
`;

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
);

const PostDetails = () => (
  <>
    {/* <!-- Blog section --> */}
    <Post>
      <div>
        <img src={imgB1} alt="" />
      </div>
      <div>
        <p>
          Doubling my 9–5 salary several times in my career is something I never
          thought would happen. My career went from startup land to call center
          operator in a short space of time.
        </p>
        <p>
          That meant going from six-figures down to the minimum wage in my home
          country of Australia. And to top it off, I have no degrees in anything
          business related — unless you count a sound engineering qualification.
        </p>
        <p>
          If an uneducated guy from the home of the Kangaroo can double their
          salary, there is definitely hope for you. Popular career websites like
          “Seek” suggest the typical advice about doing better in your
          performance review or getting more education from a university. This
          advice is out of date and I have watched many colleagues fall for this
          trap and only end up disappointed.
        </p>
        <p>
          {" "}
          Doubling your salary, or at the very least increasing it
          significantly, is about breaking the norm and trying a few things that
          are a bit more radical as you’re about to see with these simple tips
          below.
        </p>
        <h3>The goal should be more than money</h3>
        <p>
          Okay so you can make more money but if that’s your only goal, the
          extra zeroes on your bank balance will get really boring real quick.
        </p>
        <blockquote>
          You can develop side-businesses, side-hustles, and hobbies that can
          supplement your 9–5 income source, and they can all put extra money in
          your pocket that allows you to work less and not stress so much about
          bills.
        </blockquote>
        <p>
          If an uneducated guy from the home of the Kangaroo can double their
          salary, there is definitely hope for you. Popular career websites like
          “Seek” suggest the typical advice about doing better in your
          performance review or getting more education from a university. This
          advice is out of date and I have watched many colleagues fall for this
          trap and only end up disappointed.
        </p>
      </div>
    </Post>
    <Box className="d-flex" mt={4}>
      <BadgePost>Freelance</BadgePost>
      <BadgePost>Design</BadgePost>
      <BadgePost>Earning</BadgePost>
      <BadgePost>Marketing</BadgePost>
      <BadgePost>Work</BadgePost>
    </Box>
  </>
);

export default PostDetails;
