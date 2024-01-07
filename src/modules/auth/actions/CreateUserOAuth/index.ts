'use server'

import { createUserOAuthUseCaseFactory } from "./factory"

type Input = {
    email: string
    name: string
    image?: string
}

export async function createUserOAuthAction(data: Input) {
    const usecase = createUserOAuthUseCaseFactory()
    await usecase.execute(data)
}