import { DataSource, DataSourceOptions } from "typeorm";
import { readFileSync } from "fs";
import { config } from "dotenv";

config();

export const dataSourceOptions: DataSourceOptions = {
    type: "postgres",
    host: process.env.DATABASE_URL,
    username: "squarecloud",
    password: process.env.DATABASE_PASSWORD,
    port: Number(process.env.DATABASE_PORT),
    database: "stable",
    synchronize: false,
    entities: [
        __dirname + '/**/*.entity{.ts,.js}'
    ],
    migrations: [
        __dirname + '/migrations/*{.ts,.js}'
    ],
    ssl: {
        ca: readFileSync("./certs/certificate.pem").toString(),
        cert: readFileSync("./certs/client.crt").toString(),
        key: readFileSync("./certs/client.key").toString(),
    },
}

export const dataSource = new DataSource(dataSourceOptions);