import React from 'react'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import clsx from 'clsx'

import client from '../../utils/sanity-client'
import { Typography } from '../Core'
import { BaseCard } from './BaseCard'

const ArticleCardImage = ({ img, variant }) => {
  const imageProps = useNextSanityImage(client, img?.asset._ref)
  return (
    <>
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
      {variant && (
        <div className="tw-absolute tw-top-[305px] tw-left-[-24px] tw-w-[calc(100%+48px)]">
          <svg
            height="100%"
            viewBox="0 0 540 22"
            className={clsx(
              'tw-w-full',
              variant === 'secondary' && 'tw-fill-secondary'
            )}
            aria-hidden="true"
          >
            <path d="M0 0s233.088 28.458 539.999 0c306.91-28.458 0 22 0 22H.06"></path>
          </svg>
        </div>
      )}
    </>
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
      img={<ArticleCardImage img={img} variant={variant} />}
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
