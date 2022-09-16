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
  variant,
  bgDark,
}) => {
  return (
    <li
      className={clsx(
        'tw-group tw-relative tw-mt-2 tw-flex tw-cursor-pointer tw-flex-col tw-overflow-hidden tw-rounded-md tw-border-[1px] tw-border-solid tw-border-gray-border tw-bg-white tw-transition',
        'focus-within:tw-shadow-lg hover:tw-shadow-lg motion-reduce:tw-transition-none',
        variant === 'secondary' && 'tw-border-secondary tw-bg-secondary',
        bgDark && 'focus-within:tw-shadow-gray-light hover:tw-shadow-gray-light'
      )}
    >
      <div className="tw-order-2 tw-flex tw-grow tw-flex-col tw-p-6">
        {variant && (
          <div className="tw-relative tw-left-[-24px] tw-top-[-42px] tw-w-[calc(100%+48px)] ">
            <svg
              height="22"
              viewBox="0 0 540 22"
              className={`tw-w-full tw-fill-${variant}`}
            >
              <g>
                <g>
                  <path d="M0 0s233.088 28.458 539.999 0c306.91-28.458 0 22 0 22H.06"></path>
                </g>
              </g>
            </svg>
          </div>
        )}
        {title && (
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
        )}
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
