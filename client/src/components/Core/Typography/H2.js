import clsx from 'clsx'

export const H2 = ({ children, additionalClassName }) => {
  return <h2 className={clsx(additionalClassName, 'h2')}>{children}</h2>
}
