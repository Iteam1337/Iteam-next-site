import clsx from 'clsx'
import React from 'react'

export const Container = ({ children, className, fluid }) => {
  return (
    <div
      className={clsx(
        className,
        fluid
          ? 'tw-w-full'
          : 'sm:tw-max-w-[540px] md:tw-max-w-[720px] lg:tw-max-w-[960px] xl:tw-max-w-[1140px] 2xl:tw-max-w-[1320px]',
        'tw-mx-auto tw-px-4'
      )}
    >
      {children}
    </div>
  )
}
