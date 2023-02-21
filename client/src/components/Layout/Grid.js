import clsx from 'clsx'

export const Grid = ({ className, children }) => {
  return (
    <div
      className={clsx(
        className,
        'tw-flex tw-grid-flow-row tw-gap-8 sm:tw-grid-cols-2 lg:tw-grid-cols-3 [@supports(display:grid)]:tw-grid'
      )}
    >
      {children}
    </div>
  )
}
