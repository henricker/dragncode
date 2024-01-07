import { db } from "@/db/db";
import { IUser } from "@/modules/auth/domain/user";
import type { User } from "@prisma/client";
import { CreateUserInput, IUserRepository } from "../../../business/repositories/UserRepository";


export class UserRepoitory implements IUserRepository {
    private db = db;

    private userDbToDomain(user: User) {
        return { email: user.email, id: user?.id, password: user.password!, name: user.name }
    }
    
    async findByEmail(email: string): Promise<IUser | null> {
        const userDb = await this.db.user.findUnique({ where: { email }})
        return userDb ? this.userDbToDomain(userDb) : null
    }

    async create({ email, name, password, image }: CreateUserInput): Promise<IUser> {
        const userDb = await this.db.user.create({
            data: { name, email, password, image }
        })
        return this.userDbToDomain(userDb)
    }
}