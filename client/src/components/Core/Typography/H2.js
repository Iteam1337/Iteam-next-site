import clsx from 'clsx'

export const H2 = ({ children, additionalClassName }) => {
  return (
    <h2 className={clsx(additionalClassName, 'tw-mb-4, sm:tw-mb-5 md:tw-mb-6')}>
      {children}
    </h2>
  )
}
