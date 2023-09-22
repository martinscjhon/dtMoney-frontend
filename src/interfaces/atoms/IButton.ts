import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: any | ReactNode
  backgorund: string
  width: string
  height: string
  weight: number
  color: string
}
