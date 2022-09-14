import React from 'react'
import client from '../../sanity-client'
import { useNextSanityImage } from 'next-sanity-image'
import Gravatar from 'react-gravatar'

import { Anchor, Title, Typography } from '../Core'
import clsx from 'clsx'

export const BaseCard = ({
  link,
  img,
  preTitle,
  title,
  children,
  readMore,
  email,
  customImgAlt,
  team,
}) => {
  const imageProps = useNextSanityImage(client, img?.asset._ref)
  return (
    <li
      className={clsx(
        'tw-group tw-relative tw-flex tw-flex-col tw-rounded-md tw-border-[1px] tw-border-solid tw-border-border-color',
        'focus-within:tw-shadow-xl hover:tw-shadow-xl',
        team && 'tw-text-center'
      )}
    >
      <div className="tw-grow-1 tw-order-2 tw-flex tw-flex-col tw-p-6 last:tw-mt-10">
        <Title variant="card" className="tw-peer tw-order-2 tw-my-2">
          <Anchor
            aria-label={`${title}, Läs mer…`}
            href={link}
            className="after:tw-inset-0 hover:tw-no-underline focus-visible:tw-outline-none"
          >
            {title}
          </Anchor>
        </Title>
        {preTitle && (
          <Typography.Caption additionalClassName="tw-order-1">
            {preTitle}
          </Typography.Caption>
        )}
        <div className="tw-order-3">{children}</div>
        {readMore && (
          <Typography.Caption
            ariaHidden="true"
            additionalClassName="peer-focus-within:tw-underline group-hover:tw-underline tw-order-4 tw-mt-4"
          >
            Läs mer...
          </Typography.Caption>
        )}
      </div>
      <div className="tw-h-60">
        {img ? (
          <img
            {...imageProps}
            alt={customImgAlt ? customImgAlt : img.alt}
            className="tw-order-1 tw-h-full tw-w-full tw-object-cover"
          />
        ) : (
          <Gravatar
            email={email}
            className="tw-order-1 tw-h-full tw-w-full tw-object-cover"
          />
        )}
      </div>
    </li>
  )
}
