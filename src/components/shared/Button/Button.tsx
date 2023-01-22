import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, disabled, ...restProps } = props

  return (
    <button
      className={`bg-black flex items-center justify-center rounded-lg w-full p-4 text-white ${
        disabled ? 'opacity-60' : ''
      } ${className}`}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button
