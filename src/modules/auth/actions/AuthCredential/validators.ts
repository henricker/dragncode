import { z } from 'zod'

export const credentialsAuthenticationValidation = z.object({
  email: z.string().email({ message: 'Email inválido!' }),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:<>,.?~[\]\-\\]).{8,}$/,
      {
        message:
          'Deve conter no mínimo 8 caracteres, inclua pelo menos um número, utilize pelo menos um caractere especial, certifique-se de ter pelo menos uma letra em caixa alta e uma em caixa baixa.',
      },
    ),
})

export type credentialsAuthenticationFormState = {
  errors?: {
    email?: string[]
    password?: string[]
    _form?: string[]
  }
}
