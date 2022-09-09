import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Title, Box, Span, Anchor, Typography } from '../Core'
import { device } from '../../utils'
import client from '../../sanity-client'
import { useNextSanityImage } from 'next-sanity-image'

const Card = styled(Box)`
  border-radius: 10px 10px;
  border: 1px solid #eae9f2;
  transition: 0.4s;
  overflow: hidden;

  &:hover {
    box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  }
`

const CardText = styled(Box)`
  padding: 30px;
`

const TitleStyled = styled(Title)`
  transition: 0.3s;
  text-decoration: none;
`

const CoverImg = styled.img`
  height: 320px;
  object-fit: ${(props) => props.scale};

  &:hover {
    cursor: pointer;
  }
`

const PostCard = ({
  img,
  imgBrand,
  preTitle,
  title,
  date,
  intro,
  children,
  readMore,
  link = '',
  ...rest
}) => {
  const imageProps = useNextSanityImage(client, img.asset._ref)
  return (
    <Card className="h-100" {...rest}>
      <Box className="position-relative">
        <Link href={link} className="w-100">
          <CoverImg
            {...imageProps}
            scale={
              img.asset._ref ==
              'image-114b3733ce819368828659f5a8990039c68519a0-1120x318-png'
                ? 'scale-down'
                : 'cover'
            }
            alt={img.alt}
            className="w-100"
          />
        </Link>
      </Box>
      <CardText>
        {preTitle && (
          <Typography.Caption additionalClassName="tw-mb-2">
            {preTitle}
          </Typography.Caption>
        )}
        <TitleStyled variant="card" mb="14px">
          {title}
        </TitleStyled>
        <Typography.ParagraphSmall additionalClassName="tw-mb-2">
          {children}
        </Typography.ParagraphSmall>
        {readMore && (
          <Box>
            <Anchor href={link}>
              <Span>Läs mer...</Span>
            </Anchor>
          </Box>
        )}
      </CardText>
    </Card>
  )
}

export default PostCard
