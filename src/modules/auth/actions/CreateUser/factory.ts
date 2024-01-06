import { CreateUserUseCase } from "../../business/useCases/CreateUser";
import { UserRepoitory } from "../../infra/impl/repositories/UserRepository";
import { BcryptHashService } from "../../infra/impl/services/BcryptHashService";

export function createUserUseCaseFactory(): CreateUserUseCase {
    const userRepository = new UserRepoitory()
    const hashService = new BcryptHashService()
    return new CreateUserUseCase(userRepository, hashService)
}