import clsx from 'clsx'

export const H1 = ({ children, additionalClassName }) => {
  return <h1 className={clsx(additionalClassName, 'h1')}>{children}</h1>
}
