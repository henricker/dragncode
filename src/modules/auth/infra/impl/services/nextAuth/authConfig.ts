import { NextAuthConfig } from "next-auth"

export const authConfig = {
    pages: {
        signIn: '/auth/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl }}) {
            const isLoggedIn = !!auth?.user
            const isPrivateRoutes = nextUrl.pathname.startsWith('/private/**')
            const isAuthRoutes = nextUrl.pathname.startsWith('/auth')

            if(!isLoggedIn && isPrivateRoutes) return false
            if(isLoggedIn && isAuthRoutes) return Response.redirect(new URL(`/private/`, nextUrl))

            return true
        }
    },
    providers: []
} as NextAuthConfig