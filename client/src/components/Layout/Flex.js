import clsx from 'clsx'
import React from 'react'

export const Flex = ({ className, children, center }) => {
  return (
    <div
      className={clsx(
        className,
        center && 'tw-items-center tw-justify-center',
        'lg:[&>*]:tw-flex-0 tw-flex tw-flex-col tw-flex-wrap tw-gap-8 lg:tw-flex-row [&>*]:tw-flex-1'
      )}
    >
      {children}
    </div>
  )
}
