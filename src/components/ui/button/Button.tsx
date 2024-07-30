import clsx from 'clsx'
import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  noBackground?: boolean
  onClick?: () => void
  type: 'button' | 'reset' | 'submit'
}

const Button: React.FC<Props> = ({ children, className, noBackground, ...props }) => {
  return (
    <button
      className={clsx(
        'flex h-10 items-center justify-center rounded-md px-[22px] py-2 text-base font-medium text-white',
        !noBackground && 'bg-primary',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
