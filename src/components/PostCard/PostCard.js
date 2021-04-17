import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Title, Box, Text, Span } from "../Core";
import { device } from "../../utils";

const Card = styled(Box)`
  border-radius: 10px 10px;
  border: 1px solid #eae9f2;
  transition: 0.4s;
  overflow: hidden;

  &:hover {
    box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  }
`;

const ImageContainerHorizontal = styled(Box)`
  overflow: hidden;
  position: relative;
  width: 100%;

  @media ${device.md} {
    width: 100%;
    min-width: 350px;
    max-width: 350px;
  }
  @media ${device.lg} {
    min-width: 265px;
  }
  @media ${device.xl} {
    min-width: 350px;
    max-width: 350px;
  }
`;

const BrandImage = styled(Box)`
  position: absolute;
  bottom: 28px;
  left: 30px;
  border-radius: 8px;
  border: 1px solid #eae9f2;
  overflow: hidden;
`;

const CardText = styled(Box)`
  padding: 30px;
`;

const TitleStyled = styled(Title)`
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const PostCard = ({
  horizontal = false,
  img,
  imgBrand,
  preTitle,
  title,
  children,
  readMore,
  ...rest
}) => (
  <Card
    className={horizontal ? "d-flex flex-column flex-md-row" : ""}
    {...rest}
  >
    {horizontal ? (
      <ImageContainerHorizontal>
        <Link href="/">
          <a className="w-100 h-100 d-flex">
            <img src={img} alt="" className="w-100 img-fluid" />
            {imgBrand && (
              <BrandImage>
                <img src={imgBrand} alt="" className="img-fluid" />
              </BrandImage>
            )}
          </a>
        </Link>
      </ImageContainerHorizontal>
    ) : (
      <Box className="position-relative">
        <Link href="/">
          <a className="w-100 h-100 d-flex">
            <img src={img} alt="" className="w-100 img-fluid" />
            {imgBrand && (
              <BrandImage>
                <img src={imgBrand} alt="" className="img-fluid" />
              </BrandImage>
            )}
          </a>
        </Link>
      </Box>
    )}

    <CardText>
      {preTitle && (
        <Text fontSize={2} lineHeight={1.75} mb="14px">
          Jan 14, 2020
        </Text>
      )}

      <Link href="/">
        <a>
          <TitleStyled variant="card" mb="14px">
            {title}
          </TitleStyled>
        </a>
      </Link>
      <Text fontSize={2} lineHeight={1.75} mb="16px">
        {children}
      </Text>
      {readMore && (
        <Box>
          <Link href="/">
            <a>
              <Span color="primary">Continue Reading</Span>
            </a>
          </Link>
        </Box>
      )}
    </CardText>
  </Card>
);

export default PostCard;
