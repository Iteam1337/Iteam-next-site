import clsx from 'clsx'

export const H2 = ({ children, additionalClassName }) => {
  return (
    <h2 className={clsx(additionalClassName, 'tw-mb-6 md:tw-mb-7')}>
      {children}
    </h2>
  )
}
