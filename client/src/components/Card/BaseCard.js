import React from 'react'
import clsx from 'clsx'

import { Anchor, Title, Typography } from '../Core'

export const BaseCard = ({
  link,
  img,
  preTitle,
  title,
  readMore,
  centerContent,
  children,
}) => {
  return (
    <li
      className={clsx(
        'tw-group tw-relative tw-mt-2 tw-flex tw-cursor-pointer tw-flex-col tw-overflow-hidden tw-rounded-md tw-border-[1px] tw-border-solid tw-border-border-color tw-bg-white tw-transition',
        'focus-within:tw-shadow-xl hover:tw-shadow-lg motion-reduce:tw-transition-none'
      )}
    >
      <div className="tw-order-2 tw-flex tw-grow tw-flex-col tw-p-6 tw-pt-8">
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
        {preTitle && preTitle}
        <div className={clsx('tw-order-3', centerContent && 'tw-text-center')}>
          {children}
        </div>
        {readMore && (
          <Typography.Caption
            ariaHidden="true"
            additionalClassName={clsx(
              'tw-transition-opacity tw-leading-none tw-opacity-0 tw-underline tw-order-4 tw-mt-0 tw-mb-0 tw-mt-auto tw-pt-1 tw-text-right',
              'motion-reduce:tw-transition-none group-hover:tw-opacity-100 peer-focus-within:tw-opacity-100'
            )}
          >
            Läs mer
          </Typography.Caption>
        )}
      </div>
      {img && img}
    </li>
  )
}
