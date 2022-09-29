import React from 'react'
import client from '../../sanity-client'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'

import { Typography } from '../Core'
import { BaseCard } from './BaseCard'

const ArticleCardImage = ({ img }) => {
  const imageProps = useNextSanityImage(client, img?.asset._ref)
  return (
    <div className="tw-relative tw-z-0 tw-order-1 tw-h-80">
      <Image
        src={imageProps.src}
        alt={img.alt}
        loader={imageProps.loader}
        blurDataURL={imageProps.blurDataURL}
        placeholder={imageProps.placeholder}
        layout="fill"
        objectFit="cover"
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
