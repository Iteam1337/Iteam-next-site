import clsx from 'clsx'
import React from 'react'

export const Flex = ({ className, children }) => {
  return (
    <div
      className={clsx(
        className,
        'tw-flex tw-flex-col tw-flex-wrap tw-gap-8 lg:tw-flex-row [&>*]:tw-flex-1'
      )}
    >
      {children}
    </div>
  )
}
