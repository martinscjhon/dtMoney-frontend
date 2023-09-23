import { InputHTMLAttributes, ReactNode } from 'react'

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  htmlFor: string
  type: string
  messageError?: string
  value?: string
  name: string
  disabled?: boolean
  iconExist?: boolean
  icon?: ReactNode
  onClickButton?: () => void
}
