import { z } from "zod"

export const CreateUserValidation = z.object({
    name: z.string().min(3, { message: 'Nome deve ter pelo menos 3 caracteres'}),
    email: z.string().email({ message: 'Email inválido!' }),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:<>,.?~[\]\-\\]).{8,}$/, { 
        message: 'Deve conter no mínimo 8 caracteres, inclua pelo menos um número, utilize pelo menos um caractere especial, certifique-se de ter pelo menos uma letra em caixa alta e uma em caixa baixa.'})
})

export type CreateUserFormState = {
    errors?: {
        email?: string[],
        password?: string[],
        name?: string[],
        _form?: string[]
    }
}