import React from 'react'
import client from '../../sanity-client'
import { useNextSanityImage } from 'next-sanity-image'

import { Typography } from '../Core'
import { BaseCard } from './BaseCard'

const PostCardImage = ({ img }) => {
  const imageProps = useNextSanityImage(client, img?.asset._ref)
  return (
    <div className="tw-h-80">
      <img
        {...imageProps}
        alt={img.alt}
        className="tw-order-1 tw-h-full tw-w-full tw-object-cover"
      />
    </div>
  )
}

const PostCardPreTitle = ({ preTitle }) => {
  return (
    <>
      {preTitle && (
        <Typography.Caption additionalClassName="tw-order-1">
          {preTitle}
        </Typography.Caption>
      )}
    </>
  )
}

export const PostCard = ({ link, img, preTitle, title, children }) => {
  return (
    <BaseCard
      link={link}
      img={<PostCardImage img={img} />}
      preTitle={<PostCardPreTitle preTitle={preTitle} />}
      title={title}
      readMore={true}
      centerContent={false}
    >
      <Typography.ParagraphSmall>{children}</Typography.ParagraphSmall>
    </BaseCard>
  )
}
