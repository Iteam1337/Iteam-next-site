import React from 'react'

const Text = ({ children, className, variant, color }) => {
  if (variant === 'caption') {
    return (
      <p
        className={`tw-mb-0 tw-text-sm tw-font-light tw-leading-tight tw-tracking-normal ${
          color === 'light' ? 'tw-text-gray-light' : 'tw-text-gray-dark'
        } ${className}`}
      >
        {children}
      </p>
    )
  } else if (variant === 'small') {
    return (
      <p
        className={`tw-mb-0 tw-text-base tw-font-light tw-leading-7 tw-tracking-normal ${
          color === 'light' ? 'tw-text-gray-light' : 'tw-text-gray-dark'
        } ${className}`}
      >
        {children}
      </p>
    )
  }
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

export default Text
