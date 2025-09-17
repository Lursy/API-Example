import { UserRepository } from '@src/modules/users/domain/repositories/user.repository';
import { User } from '@src/modules/users/domain/entities/user.entity';
import { UserSchema } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class ORMUserRepository implements UserRepository {
    constructor(
        @InjectRepository(UserSchema)
        private readonly ormRepository: Repository<UserSchema>,
    ) { }

    async findById(id: bigint): Promise<User | null> {
        const user = await this.ormRepository.findOneBy({ id });

        return user;
    }
}