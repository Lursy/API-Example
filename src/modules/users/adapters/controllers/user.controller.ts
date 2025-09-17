import { FindUserByIdUseCase } from '@src/modules/users/application/use-cases/find-user-by-id.use-case';
import { User } from '@src/modules/users/domain/entities/user.entity';
import { ParseBigIntPipe } from '../pipes/parser-bigint.pipe';
import { Body, Controller, Get, Param, Query } from '@nestjs/common';

@Controller("user")
export class UserController {
    constructor(
        private readonly findUserById: FindUserByIdUseCase
    ) { }

    @Get()
    async listUsers(@Query() listUsersDTO) {

    }

    @Get(':id')
    async getById(@Param('id', ParseBigIntPipe) id: bigint): Promise<User> {
        return this.findUserById.execute(id);
    }
}
