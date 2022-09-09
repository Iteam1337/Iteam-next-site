import React from 'react'

export const Paragraph = ({ children, className, color }) => {
  return (
    <p
      className={`tw-mb-0 tw-text-xl tw-font-light tw-leading-8 tw-tracking-normal ${
        color === 'light' ? 'tw-text-gray-light' : 'tw-text-gray-dark'
      } ${className}`}
    >
      {children}
    </p>
  )
}
