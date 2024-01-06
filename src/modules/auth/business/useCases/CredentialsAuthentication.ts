import { IUseCase } from "@/modules/shared/protocols/useCase";
import { IUser } from "../../domain/user";
import { IUserRepository } from "../repositories/UserRepository";
import { IHashService } from "../services/HashService";


type Input = {
    email: string
    password: string
}

export class CredentialsAuthentication implements IUseCase<Input, IUser | null> {

    constructor(
        private readonly userRepository: IUserRepository,
        private readonly hashService: IHashService
    ) {}

    async execute({ email, password}: Input): Promise<IUser | null> {
        const userWithEmail = await this.userRepository.findByEmail(email)
        if(!userWithEmail) return null
        const isCorrectPassword = await this.hashService.compare({ 
            contentToCompare: password, 
            contentHashed: userWithEmail.password!
        })
        if(!isCorrectPassword) return null
        return userWithEmail
    }
}