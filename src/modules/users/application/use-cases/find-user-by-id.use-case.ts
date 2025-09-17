import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { ORMUserRepository } from '../../infrastructure/persistence/repositories/user.repositorie';

@Injectable()
export class FindUserByIdUseCase {
    constructor(private readonly userRepository: ORMUserRepository) {}

    execute(id: bigint): Promise<User> {
        return this.userRepository.findById(id);
    }
}
