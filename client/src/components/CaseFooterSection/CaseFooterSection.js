import React from 'react'
import styled from 'styled-components'
import { Box, Text, Typography } from '../Core'
import BlockContent from '../BlockContent'

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

const CaseFooterSection = ({
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
        <Typography.H3>{title}</Typography.H3>
        <BlockContent variant="thin" blocks={blocks.blockText} />
      </CardText>
    </Card>
  )
}

export default CaseFooterSection
