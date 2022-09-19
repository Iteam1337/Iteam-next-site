import React from 'react'

export const CardListGrid = ({ children }) => {
  return (
    <ul className="tw-flex tw-grid-flow-row tw-gap-8 md:tw-grid-cols-2 lg:tw-grid-cols-3 [@supports(display:grid)]:tw-grid">
      {children}
    </ul>
  )
}
