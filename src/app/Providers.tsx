'use client'

import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

type ProvidersProp = {
  children: ReactNode
}

export function Providers({ children }: Readonly<ProvidersProp>) {
  return (
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  )
}
