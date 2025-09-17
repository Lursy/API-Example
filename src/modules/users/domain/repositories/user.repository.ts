import { User } from "../entities/user.entity";

export interface UserRepository {
    findById: (user: bigint) => Promise<User | null>
}
