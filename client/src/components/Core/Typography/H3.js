import clsx from 'clsx'

export const H3 = ({ children, additionalClassName }) => {
  return <h3 className={clsx(additionalClassName, 'tw-mb-0')}>{children}</h3>
}
