import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';
import { Product } from 'src/product/product.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {

    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,

        @InjectRepository(User)
        private userRepository: Repository<User>,

        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ) {}

    async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {

        const user = await this.userRepository.findOneBy({ id: createOrderDto.userId});
        const product = await this.productRepository.findOneBy({ id: createOrderDto.productId});

        if (!user || !product) {
            throw new Error('Invalid user or product');
        }

        const order = this.orderRepository.create({
            ...createOrderDto,
            user,
            product,
        });

        return this.orderRepository.save(order);
    }

    async findAll(): Promise<Order[]> {
        return this.orderRepository.find({ relations: ['user', 'product']});
    }

    
}
