'use server'

import { redirect } from "next/navigation"
import { authCredentialUseCaseFactory } from "./factory"
import { credentialsAuthenticationFormState, credentialsAuthenticationValidation } from "./validators"

export async function credentialsAuthentication(_formState: credentialsAuthenticationFormState, formData: FormData): Promise<credentialsAuthenticationFormState> {
    const validate = credentialsAuthenticationValidation.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    })

    if(!validate.success) {
        return { errors: validate.error.flatten().fieldErrors }
    }

    const { email, password } = validate.data

    try {
        const useCase = authCredentialUseCaseFactory()
        await useCase.execute({ email, password })
    } catch(err) {
        console.error(err)
        return { errors: { _form: ['Falha na autenticação'] }}
    }

    redirect('/private')
}