'use client';

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

type ProvidersProp = {
    children: ReactNode
}

export function Providers({ children }: Readonly<ProvidersProp>) {
    return (
        <NextUIProvider>
            { children }
        </NextUIProvider>
    )
}