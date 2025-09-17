import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("cats")
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get(':id/:name')
    getIndex(@Param() p): {
        status: "success" | "error";
        text?: string;
    } {
        return this.appService.Index(p);
    }
}
