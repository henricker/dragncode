'use server'

import { signIn } from '../../infra/impl/services/nextAuth/providers'

export async function githubSignAction() {
  return signIn('github', { redirectTo: '/private' })
}
