import { CreateUserOAuthUseCase } from '../../business/useCases/CreateOAuthUser'
import { UserRepoitory } from '../../infra/impl/repositories/UserRepository'

export function createUserOAuthUseCaseFactory(): CreateUserOAuthUseCase {
  const userRepository = new UserRepoitory()

  return new CreateUserOAuthUseCase(userRepository)
}
