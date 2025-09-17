import { IUserRepository } from '../../domain/repositories/user.repository';
import { IUser } from '../../domain/entities/user.entity';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @Inject(IUserRepository)
        private readonly userRepository: IUserRepository
    ) {}

    findById(id: bigint): Promise<IUser> {
        return this.userRepository.findById(id);
    }
    
    create(data: CreateUserDTO) {
        return this.userRepository.create(data);
    }
}
