'use client';

import GithubImg from '@public/Github.svg';
import EmailImg from '@public/email.svg';
import KeyImg from '@public/key.svg';
import Image from "next/image";
import { FormButton } from "../UI/FormButton";
import { FormInput } from "../UI/FormInput";

export function LoginForm() {

    return (
        <form className='p-4 flex flex-col items-center gap-3 w-full xl:gap-8'>
          <FormInput name="email" startImage={{ alt: 'email icon', src: EmailImg }}  placeholder='email@email.com' />
          <FormInput
            isPasswordInput
            name="password"
            startImage={{
              alt: 'key icon',
              src: KeyImg
            }}
          />
        <div className='flex items-center justify-around w-full mt-4 gap-4'> 
            <FormButton type="submit" className='flex-1 text-sm font-bold text-white  p-2 rounded-lg bg-blue-800 text-center xl:text-base'>Login</FormButton>
            <FormButton type='button' className='bg-white flex-1 p-2 rounded-lg flex items-center justify-center'>
              <Image src={GithubImg} alt='github image'/>
            </FormButton>
        </div>
      </form>
    )
}