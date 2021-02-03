import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

const Button = ({
  children,
  disabled,
  className,
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => (
  <button
    className={classNames(
      `text-white font-semibold rounded-lg shadow-md ${
        disabled ? 'bg-gray-300' : 'bg-green-500'
      }`,
      className
    )}
    {...props}
  >
    {children}
  </button>
)

export default Button
