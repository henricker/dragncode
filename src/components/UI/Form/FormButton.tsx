'use client'

import { Button } from '@nextui-org/react'
import { ReactNode } from 'react'
import { useFormStatus } from 'react-dom'
import { twMerge } from 'tailwind-merge'

type FormButtonProps = {
  children: ReactNode
  className?: string
  onClick?: () => void
  type: 'submit' | 'button' | 'reset'
}

export function FormButton({
  children,
  className,
  type = 'button',
  onClick,
}: Readonly<FormButtonProps>) {
  const { pending } = useFormStatus()
  return (
    <Button
      onClick={onClick}
      type={type}
      className={twMerge(
        'rounded-lg p-2 text-center text-sm font-bold text-white xl:text-base',
        className,
      )}
      isLoading={type === 'submit' ? pending : false}
    >
      {children}
    </Button>
  )
}
