import { IsString, IsNumber, Min } from "class-validator";

export class CreateProductDto {

    @IsString()
    name: string;

    @IsNumber()
    price: number;

    @IsString()
    description: string;
}