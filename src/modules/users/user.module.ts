import { TypeOrmUserRepository } from './infrastructure/persistence/repositories/user.repositorie';
import { UserSchema } from './infrastructure/persistence/entities/user.entity';
import { UserController } from './adapters/controllers/user.controller';
import { IUserRepository } from './domain/repositories/user.repository';
import { UserService } from './application/services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserSchema])
    ],
    controllers: [
        UserController
    ],
    providers: [
        UserService,
        {
            provide: IUserRepository,
            useClass: TypeOrmUserRepository,
        },
    ],
})

export class UsersModule { }