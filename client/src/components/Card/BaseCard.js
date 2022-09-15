import React from 'react'
import client from '../../sanity-client'
import { useNextSanityImage } from 'next-sanity-image'
import Gravatar from 'react-gravatar'
import clsx from 'clsx'

import { Anchor, Title, Typography } from '../Core'

export const BaseCard = ({
  link,
  img,
  preTitle,
  title,
  readMore,
  customImgAlt,
  gravatarEmail,
  centerContent,
  children,
}) => {
  const imageProps = useNextSanityImage(client, img?.asset._ref)
  return (
    <li
      className={clsx(
        'tw-group tw-relative tw-mt-2 tw-flex tw-cursor-pointer tw-flex-col tw-rounded-md tw-border-[1px] tw-border-solid tw-border-border-color',
        'tw-overflow-hidden focus-within:tw-shadow-xl hover:tw-shadow-lg',
        centerContent && 'tw-items-center'
      )}
    >
      <div className="tw-order-2 tw-flex tw-grow tw-flex-col tw-p-6 last:tw-mt-10">
        <Title
          variant="card"
          className={clsx(
            'tw-peer tw-order-2 tw-my-2',
            centerContent && 'tw-text-center'
          )}
        >
          <Anchor
            aria-label={`${title}, Läs mer…`}
            href={link}
            className="after:tw-absolute after:tw-inset-0 hover:tw-text-inherit hover:tw-no-underline focus-visible:tw-outline-none"
          >
            {title}
          </Anchor>
        </Title>
        {preTitle && (
          <Typography.Caption
            additionalClassName={clsx(
              'tw-order-1',
              centerContent && 'tw-text-center'
            )}
          >
            {preTitle}
          </Typography.Caption>
        )}
        <div className={clsx('tw-order-3', centerContent && 'tw-text-center')}>
          {children}
        </div>
        {readMore && (
          <Typography.Caption
            ariaHidden="true"
            additionalClassName="peer-focus-within:tw-underline group-hover:tw-underline tw-order-4 tw-mt-auto tw-pt-4 tw-text-right"
          >
            Läs mer...
          </Typography.Caption>
        )}
      </div>
      <div
        className={clsx(
          'tw-h-80',
          centerContent &&
            'tw-mt-6 tw-max-h-[160px] tw-min-h-[160px] tw-min-w-[160px] tw-max-w-[160px] tw-overflow-hidden tw-rounded-full'
        )}
      >
        {img ? (
          <img
            {...imageProps}
            alt={customImgAlt ? customImgAlt : img.alt}
            className="tw-order-1 tw-h-full tw-w-full tw-object-cover"
          />
        ) : (
          <Gravatar
            email={gravatarEmail}
            className="tw-order-1 tw-h-auto tw-max-w-full"
            size={200}
          />
        )}
      </div>
    </li>
  )
}
