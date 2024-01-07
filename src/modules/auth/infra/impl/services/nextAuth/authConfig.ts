import { db } from "@/db/db"
import { NextAuthConfig } from "next-auth"

export const authConfig = {
    pages: {
        signIn: '/auth/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl }}) {
            const isLoggedIn = !!auth?.user
            const isPrivateRoutes = nextUrl.pathname.startsWith('/private/**')
            const isAuthRoutes = nextUrl.pathname.startsWith('/auth/**')
            if(!isLoggedIn && isPrivateRoutes) return false
            if(isLoggedIn && isAuthRoutes) return Response.redirect(new URL(`/private/`, nextUrl))
            return true
        },
        async signIn({ account, user  }) {
            if(account?.type === 'oauth') {
                const emailExists = await db.user.findFirst({
                    where: { email: user.email }
                })
                if(!emailExists) {
                    await db.user.create({
                        data: {
                            email: user.email,
                            image: user.image,
                            name: user.name
                        }
                    })
                }
            }
            return true
        }
    },
    providers: [],
} as NextAuthConfig