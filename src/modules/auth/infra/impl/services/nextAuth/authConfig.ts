import { createUserOAuthAction } from '@/modules/auth/actions/CreateUserOAuth'
import { NextAuthConfig } from 'next-auth'
export const authConfig = {
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isPrivateRoutes = nextUrl.pathname.startsWith('/workspaces')
      const isAuthRoutes = nextUrl.pathname.startsWith('/auth')
      if (!isLoggedIn && isPrivateRoutes) return false
      if (isLoggedIn && isAuthRoutes)
        return Response.redirect(new URL(`/workspaces/`, nextUrl))
      return true
    },
    async signIn({ account, user }) {
      if (account?.type === 'oauth') {
        createUserOAuthAction({
          email: user.email as string,
          name: user.name as string,
          image: user.image as string,
        })
      }
      return true
    },
  },
  providers: [],
} as NextAuthConfig
