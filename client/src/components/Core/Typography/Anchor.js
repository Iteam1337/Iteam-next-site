import clsx from 'clsx'
import React from 'react'

export const Anchor = ({
  children,
  href = '#',
  additionalClassName,
  ariaLabel,
}) => {
  return (
    <a
      href={href}
      className={clsx(
        additionalClassName,
        'tw-underline-none tw-text-gray-dark',
        'hover:tw-underline'
      )}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}
