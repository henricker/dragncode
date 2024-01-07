import { IUser } from '@/modules/auth/domain/user'

export type CreateUserInput = {
  name: string
  password?: string
  email: string
  image?: string
}

export interface IUserRepository {
  findByEmail(email: string): Promise<IUser | null>
  create(input: CreateUserInput): Promise<IUser>
}
