import clsx from 'clsx'
import React from 'react'

export const Anchor = ({
  children,
  href = '#',
  additionalClassName,
  ariaLabel,
  target,
}) => {
  return (
    <a
      href={href}
      className={clsx(additionalClassName, 'a')}
      aria-label={ariaLabel}
      target={target}
    >
      {children}
    </a>
  )
}
