import { IsNumber, IsPositive } from "class-validator";


export class CreateOrderDto {

    @IsNumber()
    userId: number;

    @IsNumber()
    productId: number;

    @IsNumber()
    @IsPositive()
    quantity: number;

    @IsNumber()
    @IsPositive()
    totalPrice: number;
}