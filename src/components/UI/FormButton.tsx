'use client';

import { Button } from "@nextui-org/react";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

type FormButtonProps = {
    children: ReactNode
    className: string
    type: 'submit' | 'button' | 'reset'
}

export function FormButton({ children, className, type='button' }: Readonly<FormButtonProps>) {
    const { pending } = useFormStatus()
    return (
        <Button type={type} className={className} isLoading={type === 'submit' ? pending : false}>{children}</Button>
    )
}