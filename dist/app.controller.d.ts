import { AppService } from './app.service';
import { PrismaService } from './modules/prisma/prisma.service';
export declare class AppController {
    private readonly appService;
    private readonly prisma;
    constructor(appService: AppService, prisma: PrismaService);
    getIndex(p: any): {
        status: "success" | "error";
        text?: string;
    };
}
