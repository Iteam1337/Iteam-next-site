import clsx from 'clsx'

export const H1 = ({ children, className }) => {
  return <h1 className={clsx(className, 'tw-mb-6')}>{children}</h1>
}
