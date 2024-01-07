'use client';

import { credentialsAuthenticationAction } from '@/modules/auth/actions/AuthCredential';
import { githubSignAction } from '@/modules/auth/actions/AuthGithub';
import GithubImg from '@public/Github.svg';
import EmailImg from '@public/email.svg';
import KeyImg from '@public/key.svg';
import Image from "next/image";
import { useFormState } from 'react-dom';
import { FormButton } from "../UI/FormButton";
import { FormInput } from "../UI/FormInput";

export function LoginForm() {
  const [formState, action] = useFormState(credentialsAuthenticationAction, { errors: {}})
  
    return (
      <>
      
        <form 
          action={action}
          className='p-4 flex flex-col items-center gap-3 w-full xl:gap-8'
          >
          <FormInput 
            name="email" 
            startImage={{ alt: 'email icon', src: EmailImg }}  
            placeholder='email@email.com' 
            isInvalid={!!formState.errors?.email}
            errorMessage={formState.errors?.email?.join()}
          />
          <FormInput
            isPasswordInput
            name="password"
            startImage={{
              alt: 'key icon',
              src: KeyImg
            }}
            isInvalid={!!formState.errors?.password}
            errorMessage={formState.errors?.password?.join()}
          />
          { formState.errors?._form && <span className="text-sm bg-red-500 text-white p-4">{formState.errors._form.join()}</span>}
        <div className='flex items-center justify-around w-full mt-4 gap-4'> 
            <FormButton type="submit" className='flex-1 bg-blue-800'>Login</FormButton>
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