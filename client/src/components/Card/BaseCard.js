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
        'tw-group tw-relative tw-mt-2 tw-flex tw-flex-1 tw-cursor-pointer tw-flex-col tw-overflow-hidden tw-rounded-md tw-border-[1px] tw-border-solid tw-border-gray-border tw-bg-white tw-transition',
        'focus-within:tw-shadow-lg hover:tw-shadow-lg motion-reduce:tw-transition-none',
        variant === 'secondary' && 'tw-border-secondary tw-bg-secondary',
        bgDark && 'focus-within:tw-shadow-gray-light hover:tw-shadow-gray-light'
      )}
    >
      <div className="tw-flex tw-grow tw-flex-col">
        {title && (
          <Title
            variant="card"
            className={clsx(
              'tw-peer tw-order-3 tw-py-2 tw-px-6',
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
        {img && (
          <div className="tw-relative tw-order-1">
            {img}
            {variant && (
              <div className="tw-absolute tw-left-[-24px] tw-bottom-0 tw-w-[calc(100%+48px)] ">
                <svg
                  height="22"
                  viewBox="0 0 540 22"
                  className={clsx(
                    'tw-w-full',
                    variant === 'secondary' && 'tw-fill-secondary'
                  )}
                  aria-hidden="true"
                >
                  <g>
                    <g>
                      <path d="M0 0s233.088 28.458 539.999 0c306.91-28.458 0 22 0 22H.06"></path>
                    </g>
                  </g>
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
            additionalClassName={clsx(
              'tw-order-4 tw-px-6 tw-pb-6 tw-transition-opacity tw-leading-none tw-opacity-0 tw-underline tw-mt-0 tw-mb-0 tw-mt-auto tw-pt-1 tw-text-right',
              'motion-reduce:tw-transition-none group-hover:tw-opacity-100 peer-focus-within:tw-opacity-100'
            )}
          >
            Läs mer
          </Typography.Caption>
        )}
      </div>
    </li>
  )
}
