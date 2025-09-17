import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { ORMUserRepository } from '../../infrastructure/persistence/repositories/user.repositorie';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: ORMUserRepository) {}

    findById(id: bigint): Promise<User> {
        return this.userRepository.findById(id);
    }
}
