import clsx from 'clsx'

export const H1 = ({ children, additionalClassName }) => {
  return <h1 className={clsx(additionalClassName, 'tw-mb-6')}>{children}</h1>
}
