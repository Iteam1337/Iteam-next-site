import clsx from 'clsx'

export const H2 = ({ children, className }) => {
  return <h2 className={clsx(className, 'tw-mb-6 md:tw-mb-7')}>{children}</h2>
}
