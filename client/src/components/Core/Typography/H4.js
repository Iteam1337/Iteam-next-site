import clsx from 'clsx'

export const H4 = ({ children, additionalClassName }) => {
  return <h4 className={clsx(additionalClassName, 'h4')}>{children}</h4>
}
