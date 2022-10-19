import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { Box, Typography } from '../Core'

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

export const CaseFooterSection = ({ img, title, alt, blocks, ...rest }) => {
  return (
    <Card className="d-flex" {...rest}>
      <ImageContainer>
        <Image src={img} alt={alt} layout="fill" objectFit="contain" />
      </ImageContainer>
      <CardText>
        <Typography.H3>{title}</Typography.H3>
        <Typography.BlockContent blocks={blocks.blockText} />
      </CardText>
    </Card>
  )
}
