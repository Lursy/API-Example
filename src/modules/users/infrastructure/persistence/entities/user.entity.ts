import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import { snowflake } from "@src/utils/snowflake";

@Entity({ name: 'user' })
export class UserSchema {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: bigint;

    @Column({ type: 'varchar' })
    email: string;

    @BeforeInsert()
    generateId() {
        this.id = snowflake.nextId();
    }
}
