'use client';

import { FormButton } from "@/components/UI/Form/FormButton";
import { FormInput } from "@/components/UI/Form/FormInput";
import { githubSignAction } from "@/modules/auth/actions/AuthGithub";
import { createUserAction } from "@/modules/auth/actions/CreateUser";
import GithubImg from '@public/Github.svg';
import EmailImg from '@public/email.svg';
import KeyImg from '@public/key.svg';
import UserImg from '@public/user.svg';
import Image from "next/image";
import { useFormState } from "react-dom";

export function SignUpForm() {
    const [formState, action] = useFormState(createUserAction, { errors: {}})

    return (
      <>
        <form className='p-4 flex flex-col items-center gap-3 w-full xl:gap-8' action={action}>
        <FormInput 
          startImage={{alt: 'email-icon', src: EmailImg}} 
          name="email" 
          placeholder="email@email.com"
          isInvalid={!!formState.errors?.email}
          errorMessage={formState.errors?.email?.join()}
        />
        <FormInput 
          startImage={{alt: 'User icon', src: UserImg}} 
          name="name" 
          placeholder="Joe doe"
          isInvalid={!!formState.errors?.name}
          errorMessage={formState.errors?.name?.join()}  
        />
        <FormInput 
          isPasswordInput 
          name="password" 
          startImage={{alt: 'key-icon', src: KeyImg}}
          isInvalid={!!formState.errors?.password} 
          errorMessage={formState.errors?.password?.join()}   
        />
        { formState.errors?._form && <span className="text-sm bg-red-500 text-white p-4">{formState.errors._form.join()}</span>}
        <div className='flex items-center justify-around w-full mt-4 gap-4'> 
        <FormButton className='flex-1 bg-blue-800' type="submit">Criar conta</FormButton>
        </div>
      </form>
      <form action={githubSignAction} className="p-4 w-full">
          <FormButton className='bg-white w-full flex items-center justify-center' type="submit" >
            <Image src={GithubImg} alt='github image'/>
          </FormButton>  
        </form>
      </>
    )
}