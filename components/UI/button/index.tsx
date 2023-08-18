import React from 'react'

interface ButtonPropsType {
  children: React.ReactNode
}

const Button = ({ children }: ButtonPropsType) => {
  return <button className="button">{children}</button>
}

export default Button
