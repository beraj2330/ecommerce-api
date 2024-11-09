import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { User } from 'src/user/user.entity';
import { Product } from 'src/product/product.entity';

@Module({
  providers: [OrderService],
  controllers: [OrderController],
  imports:[TypeOrmModule.forFeature([Order, User, Product])],
})
export class OrderModule {}
