import React from 'react'
import clsx from 'clsx'

import { Anchor, Title, Typography } from '../Core'

export const NotificationCard = ({
  link,
  icon,
  preTitle,
  title,
  ariaLabel,
  variant,
  bgDark,
}) => {
  return (
    <div
      className={clsx(
        'tw-group tw-relative tw-mt-2 tw-flex tw-w-80 tw-cursor-pointer tw-rounded-lg tw-border-[1px] tw-border-solid tw-border-gray-border tw-bg-white tw-p-4 tw-transition',
        'focus-within:tw-border-black focus-within:tw-bg-black hover:tw-border-black  hover:tw-bg-black motion-reduce:tw-transition-none',
        variant === 'secondary' && 'tw-border-secondary tw-bg-secondary',
        bgDark && 'focus-within:tw-shadow-gray-light hover:tw-shadow-gray-light'
      )}
    >
      <i
        className={`icon ${icon} tw-h-full group-focus-within:tw-text-white group-hover:tw-text-white`}
        aria-hidden="true"
      />
      <div className="tw-order-2 tw-ml-6 tw-flex tw-flex-col">
        {title && (
          <Title
            variant="card"
            className="tw-order-2 tw-mt-2 tw-mb-0 tw-text-base tw-font-light"
          >
            <Anchor
              aria-label={ariaLabel}
              href={link}
              className={clsx(
                'tw-font-light tw-transition-none',
                'after:tw-absolute after:tw-inset-0 hover:tw-text-white hover:tw-no-underline focus-visible:tw-text-white focus-visible:tw-outline-none '
              )}
            >
              {title}
            </Anchor>
          </Title>
        )}
        {preTitle && (
          <Typography.Caption
            additionalClassName={
              'tw-order-1 group-hover:tw-text-white group-focus-within:tw-text-white'
            }
            ariaHidden={true}
          >
            {preTitle}
          </Typography.Caption>
        )}
      </div>
    </div>
  )
}
