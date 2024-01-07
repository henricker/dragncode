import { Logo } from '@/components/Logo'
import PeopleWorkingImg from '@public/people-working.svg'
import Image from 'next/image'
import Link from 'next/link'
import { SignUpForm } from './components/SignUpForm'

export default function SignUpPage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center xl:justify-around max-w-7xl m-auto">
      <Image
        className="hidden max-w-[50%] md:block lg:max-w-[40%]"
        alt="people working"
        src={PeopleWorkingImg}
      />
      <div className="rounded-md p-6 w-full max-w-md">
        <div className="flex flex-col items-center justify-center w-full">
          <Logo />
          <h1 className="text-xl font-bold text-white mt-4 xl:text-2xl">
            Criar conta
          </h1>
          <SignUpForm />
          <Link
            href="/auth/login"
            className="mt-4 text-white text-base border-b-white border-b-1.5 xl:text-lg"
          >
            Já tem conta? Faça login
          </Link>
        </div>
      </div>
    </main>
  )
}
