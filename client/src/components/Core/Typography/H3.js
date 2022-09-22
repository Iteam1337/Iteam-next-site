import clsx from 'clsx'

export const H3 = ({ children, additionalClassName }) => {
  return <h3 className={clsx(additionalClassName, 'h3')}>{children}</h3>
}
