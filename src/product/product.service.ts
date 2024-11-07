import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>) {}

    async createProduct(createProductDto: CreateProductDto): Promise<Product> {

        const product = this.productRepository.create(createProductDto);
        return this.productRepository.save(product);
    }

    async findAll(): Promise<Product[]> {
        return this.productRepository.find();
    }
}
