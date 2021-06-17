import React from "react"
import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"
import { Title, Box, Text } from "../Core"

const Card = styled(Box)`
  border-radius: 0;
  overflow: hidden;
`

const ImageContainer = styled(Box)`
  max-width: 210px;
  border-radius: 0px;
  overflow: hidden;
  position: relative;
  width: 100%;
`

const BrandImage = styled(Box)`
  overflow: hidden;
  img {
    border-radius: 0px;
    border: 1px solid #eae9f2;
  }
`

const CardText = styled(Box)`
  padding-left: 30px;
`

const TitleStyled = styled(Title)`
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const CaseCard = ({
  img,
  imgBrand,
  preTitle,
  title,
  children,
  readMore,
  ...rest
}) => (
  <Card className="d-flex" {...rest}>
    <ImageContainer>
      <Link href="/">
        <a>
          <Image
            height={254}
            width={203}
            layout="responsive"
            src={img}
            alt={title}
          />
        </a>
      </Link>
    </ImageContainer>
    <CardText>
      <Link href="/">
        <a>
          <TitleStyled variant="card" mb="12px">
            {title}
          </TitleStyled>
        </a>
      </Link>
      <Text fontSize={2} lineHeight={1.75} mb="0">
        {children}
      </Text>
    </CardText>
  </Card>
)

export default CaseCard
