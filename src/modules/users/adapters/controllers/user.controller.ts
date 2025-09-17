import { CreateUserDTO } from '../../application/dtos/create-user.dto';
import { UserService } from '../../application/services/user.service';
import { ParseBigIntPipe } from '../pipes/parser-bigint.pipe';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller("user")
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Get()
    async index() {
        return { online: true };
    }

    @Get(':id')
    async getById(@Param('id', ParseBigIntPipe) id: bigint) {
        return this.userService.findById(id);
    }

    @Post()
    async create(@Body() data: CreateUserDTO) {
        return this.userService.create(data);
    }
}
