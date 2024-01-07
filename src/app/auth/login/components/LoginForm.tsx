'use client'

import { FormButton } from '@/components/UI/Form/FormButton'
import { FormInput } from '@/components/UI/Form/FormInput'
import { credentialsAuthenticationAction } from '@/modules/auth/actions/AuthCredential'
import { githubSignAction } from '@/modules/auth/actions/AuthGithub'
import GithubImg from '@public/Github.svg'
import EmailImg from '@public/email.svg'
import KeyImg from '@public/key.svg'
import Image from 'next/image'
import { useFormState } from 'react-dom'

export function LoginForm() {
  const [formState, action] = useFormState(credentialsAuthenticationAction, {
    errors: {},
  })

  return (
    <>
      <form
        action={action}
        className="flex w-full flex-col items-center gap-3 p-4 xl:gap-8"
      >
        <FormInput
          name="email"
          startImage={{ alt: 'email icon', src: EmailImg }}
          placeholder="email@email.com"
          isInvalid={!!formState.errors?.email}
          errorMessage={formState.errors?.email?.join()}
        />
        <FormInput
          isPasswordInput
          name="password"
          startImage={{
            alt: 'key icon',
            src: KeyImg,
          }}
          isInvalid={!!formState.errors?.password}
          errorMessage={formState.errors?.password?.join()}
        />
        {formState.errors?._form && (
          <span className="bg-red-500 p-4 text-sm text-white">
            {formState.errors._form.join()}
          </span>
        )}
        <div className="mt-4 flex w-full items-center justify-around gap-4">
          <FormButton type="submit" className="flex-1 bg-blue-800">
            Login
          </FormButton>
        </div>
      </form>
      <form action={githubSignAction} className="w-full p-4">
        <FormButton
          className="flex w-full items-center justify-center bg-white"
          type="submit"
        >
          <Image src={GithubImg} alt="github image" />
        </FormButton>
      </form>
    </>
  )
}
