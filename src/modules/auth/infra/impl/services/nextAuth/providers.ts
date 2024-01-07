import { authCredentialUseCaseFactory } from "@/modules/auth/actions/AuthCredential/factory";
import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from 'next-auth/providers/credentials';
import Github from 'next-auth/providers/github';
import { z } from "zod";
import { authConfig } from './authConfig';

export const providers = {
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z.object({
                    email: z.string().email('Insira um email válido'),
                    password: z.string().min(8, 'A senha deve conter no mínimo 8 caracteres')
                }).safeParse(credentials)
                if(!parsedCredentials.success)  return null
                const { email, password } = parsedCredentials.data
                const useCase = authCredentialUseCaseFactory()
                const user = await useCase.execute({ email, password })
                return user
            }
        }),
        Github({
            clientId: process.env.GITHUB_CLIENT_ID, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        })
    ]
} as NextAuthConfig

export const { auth, signIn, signOut, handlers: {GET, POST} } = NextAuth(providers)