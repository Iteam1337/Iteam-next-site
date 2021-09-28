import React from "react"
import styled from "styled-components"
import { Title, Box, Text } from "../Core"
import BlockContent from "../../components/BlockContent"

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
  alt,
  blocks,
  ...rest
}) => {
  return (
    <Card className="d-flex" {...rest}>
      <ImageContainer>
        <img src={img} alt={alt} className="w-100 img-fluid" />
      </ImageContainer>
      <CardText>
        <TitleStyled variant="card" mb="12px">
          {title}
        </TitleStyled>
        <Text fontSize={2} lineHeight={1.75} mb="0">
          <BlockContent blocks={blocks.blockText} />
        </Text>
      </CardText>
    </Card >
  )
}

export default CaseCard
