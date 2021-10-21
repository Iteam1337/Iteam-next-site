import React from 'react'
import styled from 'styled-components'
import { Title, Box, Text } from '../Core'
import BlockContent from '../../components/BlockContent'
import Image from 'next/image'

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
        <Image src={img} alt={alt} layout="fill" />
      </ImageContainer>
      <CardText>
        <TitleStyled variant="card" mb="12px">
          {title}
        </TitleStyled>
        <BlockContent variant="thin" blocks={blocks.blockText} />
      </CardText>
    </Card>
  )
}

export default CaseCard
