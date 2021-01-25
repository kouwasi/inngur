import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Button = ({ children, ...props }: Props) => (
  <button
    className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md"
    {...props}
  >
    {children}
  </button>
)

export default Button
