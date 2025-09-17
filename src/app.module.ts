import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './utils/database/data-source';
import { UsersModule } from './modules/users/user.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        UsersModule
    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule { }
// src/app.module.ts