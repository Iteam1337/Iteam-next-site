import React from 'react'
import client from '../../sanity-client'
import { useNextSanityImage } from 'next-sanity-image'

import { Typography } from '../Core'
import { BaseCard } from './BaseCard'

const ArticleCardImage = ({ img }) => {
  const imageProps = useNextSanityImage(client, img?.asset._ref)
  return (
    <div className="tw-h-80">
      <img
        {...imageProps}
        alt={img.alt}
        className="tw-h-full tw-w-full tw-object-cover"
      />
    </div>
  )
}

const ArticleCardPreTitle = ({ preTitle }) => {
  return <>{preTitle && <Typography.Caption>{preTitle}</Typography.Caption>}</>
}

export const ArticleCard = ({
  link,
  img,
  preTitle,
  title,
  children,
  variant,
  bgDark,
}) => {
  return (
    <BaseCard
      link={link}
      img={<ArticleCardImage img={img} />}
      preTitle={<ArticleCardPreTitle preTitle={preTitle} />}
      title={title}
      readMore={true}
      centerContent={false}
      variant={variant}
      bgDark={bgDark}
    >
      <Typography.ParagraphSmall>{children}</Typography.ParagraphSmall>
    </BaseCard>
  )
}
