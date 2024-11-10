import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true})
    email: string;
    
    @Column()
    password: string;

    @Column({ default: 'customer'})
    role: string;

    //this decorator is used to TypeORM to specify that a 
    //method should run automatically before a new record is saved in the database
    @BeforeInsert()
    //Inside this method password hashing logic is implemented
    async hashPassword() {
        
        this.password = await bcrypt.hash(this.password, 10);
    }
}