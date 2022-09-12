import React from 'react'
import clsx from 'clsx'

export const Caption = ({ children, additionalClassName, light }) => {
  return (
    <p
      className={clsx(
        'tw-mb-0 tw-text-sm tw-font-light tw-leading-tight tw-tracking-normal',
        light ? 'tw-text-gray-light' : 'tw-text-gray-dark',
        additionalClassName
      )}
    >
      {children}
    </p>
  )
}
