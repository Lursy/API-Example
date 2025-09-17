import { IUserRepository } from '@src/modules/users/domain/repositories/user.repository';
import { CreateUserDTO } from '@src/modules/users/application/dtos/create-user.dto';
import { UserSchema } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class TypeOrmUserRepository implements IUserRepository {
    constructor(
        @InjectRepository(UserSchema)
        private readonly repositorie: Repository<UserSchema>,
    ) { }

    async findById(id: bigint) {
        const user = await this.repositorie.findOneBy({ id });

        return user;
    }

    async create(data: CreateUserDTO) {
        const user = this.repositorie.create(data);

        return user;
    }
}