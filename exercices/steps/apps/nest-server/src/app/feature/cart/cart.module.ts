import { Module } from '@nestjs/common';
import { BasketController } from './cart.controller';
import { CartService } from './cart.service';

@Module({
  imports: [],
  controllers: [BasketController],
  providers: [CartService],
})
export class CartModule {}
