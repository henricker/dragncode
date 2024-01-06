import { BusinessError } from "@/modules/shared/errors/BusinessError";
import { IUseCase } from "@/modules/shared/protocols/useCase";
import { IUser } from "../../domain/user";
import { IUserRepository } from "../repositories/UserRepository";
import { IHashService } from "../services/HashService";

type Input = {
    email: string
    name: string
    password: string
}

export class CreateUserUseCase implements IUseCase<Input, IUser> {
    constructor(
        private readonly userRepository: IUserRepository,
        private readonly hashService: IHashService
    ) {}

    async execute({ email, name, password }: Input): Promise<IUser> {
        const emailAlreadyExists = await this.userRepository.findByEmail(email)
        if(emailAlreadyExists) throw new BusinessError('Email já cadastrado')
        const hashedPassword = await this.hashService.hash({
            content: password, 
            salt: 8
        })
        return this.userRepository.create({
            email,
            name,
            password: hashedPassword
        })
    }
}