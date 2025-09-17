import { CreateUserDTO } from "../../application/dtos/create-user.dto";
import { IUser } from "../entities/user.entity";

export const IUserRepository = Symbol('IUserRepository');

export interface IUserRepository {
    findById: (user: bigint) => Promise<IUser>;
    create: (data: CreateUserDTO) => Promise<IUser>;
}
