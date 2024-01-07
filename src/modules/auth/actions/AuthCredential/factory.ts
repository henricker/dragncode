import { CredentialsAuthentication } from '../../business/useCases/CredentialsAuthentication'
import { UserRepoitory } from '../../infra/impl/repositories/UserRepository'
import { BcryptHashService } from '../../infra/impl/services/BcryptHashService'

export function authCredentialUseCaseFactory(): CredentialsAuthentication {
  const userRepository = new UserRepoitory()
  const hashService = new BcryptHashService()
  return new CredentialsAuthentication(userRepository, hashService)
}
