import { DataSource, DataSourceOptions } from "typeorm";
import { readFileSync } from "fs";
import { config } from "dotenv";

config();

export const dataSourceOptions: DataSourceOptions = {
    type: "postgres",
    host: process.env.DATABASE_URL,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: Number(process.env.DATABASE_PORT),
    synchronize: false,
    entities: [
        __dirname + '/**/*.entity{.ts,.js}'
    ],
    migrations: [
        __dirname + '/migrations/*{.ts,.js}'
    ],
    ssl: {
        ca: readFileSync("./certs/certificate.pem").toString(),
        cert: readFileSync("./certs/ca-certificate.crt").toString(),
        key: readFileSync("./certs/private-key.key").toString(),
    },
}

export const dataSource = new DataSource(dataSourceOptions);