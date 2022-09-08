import React from 'react'

const Text = ({ children, className, variant, color }) => {
  if (variant === 'caption') {
    return (
      <p
        className={`tw-mb-0 tw-font-light tw-tracking-normal tw-text-sm leading-tight ${
          color === 'light' ? 'tw-text-gray-light' : 'tw-text-gray-dark'
        } ${className}`}
      >
        {children}
      </p>
    )
  } else if (variant === 'small') {
    return (
      <p
        className={`tw-mb-0 tw-font-light tw-tracking-normal tw-text-base tw-leading-7 ${
          color === 'light' ? 'tw-text-gray-light' : 'tw-text-gray-dark'
        } ${className}`}
      >
        {children}
      </p>
    )
  }
  return (
    <p
      className={`tw-mb-0 tw-font-light tw-tracking-normal tw-text-xl tw-leading-8 ${
        color === 'light' ? 'tw-text-gray-light' : 'tw-text-gray-dark'
      } ${className}`}
    >
      {children}
    </p>
  )
}

export default Text
