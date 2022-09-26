import React from 'react'
import clsx from 'clsx'

import { Typography } from '../Core'

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
        'tw-group tw-relative tw-mt-2 tw-flex tw-flex-1 tw-cursor-pointer tw-flex-col tw-overflow-hidden tw-rounded-md tw-border-[1px] tw-border-solid tw-border-gray-border tw-bg-white tw-transition',
        'focus-within:tw-shadow-lg hover:tw-shadow-lg motion-reduce:tw-transition-none',
        variant === 'secondary' && 'tw-border-secondary tw-bg-secondary',
        bgDark && 'focus-within:tw-shadow-gray-light hover:tw-shadow-gray-light'
      )}
    >
      <div className="tw-flex tw-grow tw-flex-col">
        {title && (
          <Typography.H3
            className={clsx(
              'tw-peer tw-order-3 tw-py-2 tw-px-6',
              centerContent && 'tw-text-center'
            )}
          >
            <Typography.Anchor
              aria-label={`${title}, Läs mer…`}
              href={link}
              className="tw-font-bold after:tw-absolute after:tw-inset-0 hover:tw-text-inherit hover:tw-no-underline focus-visible:tw-outline-none"
            >
              {title}
            </Typography.Anchor>
          </Typography.H3>
        )}
        {img && (
          <div className="tw-order-1">
            {img}
            {variant && (
              <div className="tw-absolute tw-top-[296px] tw-left-[-24px] tw-w-[calc(100%+48px)]">
                <svg
                  height="auto"
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
          </div>
        )}
        {preTitle && (
          <div className="tw-order-2 tw-px-6 tw-pt-6">{preTitle}</div>
        )}
        <div
          className={clsx(
            'tw-order-3 tw-px-6',
            centerContent && 'tw-text-center'
          )}
        >
          {children}
        </div>
        {readMore && (
          <Typography.Caption
            ariaHidden="true"
            className={clsx(
              'tw-order-4 tw-mt-0 tw-mb-0 tw-mt-auto tw-px-6 tw-pb-6 tw-pt-1 tw-text-right tw-leading-none tw-underline tw-opacity-0 tw-transition-opacity',
              'group-hover:tw-opacity-100 peer-focus-within:tw-opacity-100 motion-reduce:tw-transition-none'
            )}
          >
            Läs mer
          </Typography.Caption>
        )}
      </div>
    </li>
  )
}
