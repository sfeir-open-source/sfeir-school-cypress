import { BookCartItem, CART_ITEM_SCHEMA } from '@nest-server/app/shared/models/cart.model';
import { INTERNAL_SERVER_SCHEMA } from '@nest-server/app/shared/models/error.model';
import { Body, Controller, Get, HttpCode, Put } from '@nestjs/common';
import { ApiBody, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AddCartItemDTO } from './add-cart-item.dto';
import { CartMapperService } from './cart-mapper.service';
import { CartService } from './cart.service';

@Controller('cart')
@ApiTags('cart')
export class BasketController {
  constructor(private readonly cartService: CartService, private readonly cartMapperService: CartMapperService) {}

  @Get()
  @ApiInternalServerErrorResponse({ status: 500, description: 'Internal server error', schema: INTERNAL_SERVER_SCHEMA })
  @ApiOkResponse({ status: 200, description: 'The user basket', schema: { type: 'array', items: CART_ITEM_SCHEMA } })
  async getBasket(): Promise<BookCartItem[]> {
    const cart = await this.cartService.readBasket();
    return this.cartMapperService.toCartItems(cart);
  }

  @Put()
  @ApiInternalServerErrorResponse({ status: 500, description: 'Internal server error', schema: INTERNAL_SERVER_SCHEMA })
  @ApiOkResponse({ status: 200, description: 'The user basket', schema: { type: 'array', items: CART_ITEM_SCHEMA } })
  @HttpCode(200)
  @ApiBody({ type: AddCartItemDTO })
  async addToBasket(
    @Body() cartItem: AddCartItemDTO
  ): Promise<BookCartItem[]> {
    const cart = await this.cartService.writeItem(cartItem);
    return this.cartMapperService.toCartItems(cart);
  }
}
