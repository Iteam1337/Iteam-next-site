import clsx from 'clsx'
import React from 'react'

export const Anchor = ({
  children,
  href = '#',
  className,
  ariaLabel,
  target,
  rel,
}) => {
  return (
    <a
      href={href}
      className={clsx(className, 'text-inherit')}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  )
}
