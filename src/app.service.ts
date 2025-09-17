import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    Index(q): {
        status: "success" | "error";
        text?: string;
    } {
        console.log(q);
        return { status: "error" };
    }
}
