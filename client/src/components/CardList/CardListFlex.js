import clsx from 'clsx'
import React from 'react'

export const CardListFlex = ({ column, children }) => {
  return (
    <ul
      className={clsx(
        'tw-flex tw-flex-col tw-justify-center tw-gap-8 md:tw-flex-row',
        column && 'tw-gap-3 md:tw-flex-col'
      )}
    >
      {children}
    </ul>
  )
}
