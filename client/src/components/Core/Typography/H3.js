import clsx from 'clsx'

export const H3 = ({ children, className }) => {
  return <h3 className={clsx(className, 'tw-mb-0')}>{children}</h3>
}
