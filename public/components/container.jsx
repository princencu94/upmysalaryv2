import clsx from 'clsx'

export default function Container({ className, ...props }) {
  return (
    <div
      className={clsx('mx-auto max-w-4xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}