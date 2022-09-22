import React from 'react'
import clsx from 'clsx'

export const Caption = ({
  ariaHidden,
  ariaLabel,
  children,
  additionalClassName,
}) => {
  return (
    <p
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      className={clsx(
        'tw-text-dark-gray tw-mb-0 tw-text-sm tw-font-light tw-leading-tight tw-tracking-normal',
        additionalClassName
      )}
    >
      {children}
    </p>
  )
}
