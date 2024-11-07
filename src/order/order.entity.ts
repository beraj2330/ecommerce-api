import { Product } from "src/product/product.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.id)
    user: User;

    @ManyToOne(() => Product, (product) => product.id)
    product: Product;

    @Column()
    quantity: number;

    @Column('decimal')
    totalPrice: number;
}