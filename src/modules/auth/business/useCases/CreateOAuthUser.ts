import { IUseCase } from "@/modules/shared/protocols/useCase";
import { IUser } from "../../domain/user";
import { IUserRepository } from "../repositories/UserRepository";

type Input = {
    email: string
    name: string
    image?: string
}

export class CreateUserOAuthUseCase implements IUseCase<Input, IUser> {
    constructor(
        private readonly userRepository: IUserRepository,
    ) {}

    async execute({ email, name, image }: Input): Promise<IUser> {
        const emailAlreadyExists = await this.userRepository.findByEmail(email)
           if(emailAlreadyExists) return emailAlreadyExists

        return this.userRepository.create({
            email,
            name,
            image
        })
    }
}