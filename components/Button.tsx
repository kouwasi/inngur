import React, {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  forwardRef
} from 'react'
import classNames from 'classnames'

const Button = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>(function Button({ children, disabled, className, ...props }, ref) {
  return (
    <button
      ref={ref}
      className={classNames(
        `py-2 px-4 text-white font-semibold rounded-lg shadow-md ${
          disabled ? 'bg-gray-300' : 'bg-green-500'
        }`,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
})

export default Button
