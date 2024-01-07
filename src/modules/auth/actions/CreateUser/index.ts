'use server'

import { BusinessError } from '@/modules/shared/errors/BusinessError'
import { redirect } from 'next/navigation'
import { createUserUseCaseFactory } from './factory'
import { CreateUserFormState, CreateUserValidation } from './validators'

export async function createUserAction(
  _formState: CreateUserFormState,
  formData: FormData,
): Promise<CreateUserFormState> {
  const validate = CreateUserValidation.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    name: formData.get('name'),
  })

  if (!validate.success) {
    return { errors: validate.error.flatten().fieldErrors }
  }

  const { email, password, name } = validate.data

  try {
    const useCase = createUserUseCaseFactory()
    await useCase.execute({ email, password, name })
  } catch (err) {
    if (err instanceof BusinessError) {
      return { errors: { _form: [err.message] } }
    }
    return { errors: { _form: ['Falha na criação de usuário'] } }
  }

  redirect('/auth/login')
}
