'use server'

import { redirect } from "next/navigation"
import { signIn } from "../../infra/impl/services/nextAuth/providers"
import { credentialsAuthenticationFormState, credentialsAuthenticationValidation } from "./validators"

export async function credentialsAuthenticationAction(_formState: credentialsAuthenticationFormState, formData: FormData): Promise<credentialsAuthenticationFormState> {
    const validate = credentialsAuthenticationValidation.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    })

    if(!validate.success) {
        return { errors: validate.error.flatten().fieldErrors }
    }

    try {
        await signIn('credentials', { ...validate.data, redirect: false })
    } catch(err: any) {
        if(err.type === 'CredentialsSignin') return { errors: { _form: ['Email ou senha incorretos'] }}
        return { errors: { _form: ['Falha na autenticação'] }}
    }

    redirect('/private')
}