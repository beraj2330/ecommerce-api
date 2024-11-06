import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'ecommerce',
      autoLoadEntities: true,  //Automatically Load entities
      synchronize: true,
    }),
    
  ],
})
export class AppModule {}
