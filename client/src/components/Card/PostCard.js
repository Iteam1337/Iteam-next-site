import React from 'react'

import { Typography } from '../Core'
import { BaseCard } from './BaseCard'

export const PostCard = ({ link, img, preTitle, title, children }) => {
  return (
    <BaseCard
      link={link}
      img={img}
      preTitle={preTitle}
      title={title}
      readMore={true}
      customImgAlt=""
      gravatarEmail=""
      centerContent={false}
    >
      <Typography.ParagraphSmall>{children}</Typography.ParagraphSmall>
    </BaseCard>
  )
}
