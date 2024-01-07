import { LoginForm } from '@/app/auth/login/components/LoginForm';
import { Logo } from '@/components/Logo';
import PeopleWorkingImg from '@public/people-working.svg';
import Image from "next/image";
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center xl:justify-around max-w-7xl m-auto">
      <Image className='hidden max-w-[50%] md:block lg:max-w-[40%]' alt="people working" src={PeopleWorkingImg}/>
      <div className='rounded-md p-6 w-full max-w-md'>
        <div className='flex flex-col items-center justify-center w-full'>
          <Logo/>
          <h1 className='text-xl font-bold text-white mt-4 xl:text-2xl'>Login</h1>
          <LoginForm/>
          <Link href="/auth/sign-up" className='mt-4 text-white text-base border-b-white border-b-1.5 xl:text-lg'>Cadastre-se</Link>
        </div>
      </div>
    </main>
  )
}
