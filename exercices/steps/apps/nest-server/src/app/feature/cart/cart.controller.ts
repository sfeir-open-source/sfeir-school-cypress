import { CartItem, CART_ITEM_SCHEMA } from '@nest-server/app/shared/models/basket.model';
import { INTERNAL_SERVER_SCHEMA } from '@nest-server/app/shared/models/error.model';
import { Body, Controller, Get, HttpCode, InternalServerErrorException, ParseArrayPipe, Put } from '@nestjs/common';
import { ApiBody, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CartItemDTO } from './cart-item.dto';
import { CartService } from './cart.service';

@Controller('cart')
@ApiTags('cart')
export class BasketController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  @ApiInternalServerErrorResponse({ status: 500, description: 'Internal server error', schema: INTERNAL_SERVER_SCHEMA })
  @ApiOkResponse({ status: 200, description: 'The user basket', schema: { type: 'array', items: CART_ITEM_SCHEMA } })
  async getBasket(): Promise<Array<CartItem> | InternalServerErrorException> {
    return await this.cartService.readBasket();
  }

  @Put()
  @ApiInternalServerErrorResponse({ status: 500, description: 'Internal server error', schema: INTERNAL_SERVER_SCHEMA })
  @ApiOkResponse({ status: 200, description: 'The user basket', schema: { type: 'array', items: CART_ITEM_SCHEMA } })
  @HttpCode(200)
  @ApiBody({ type: [CartItemDTO] })
  async addToBasket(
    @Body(new ParseArrayPipe({ items: CartItemDTO })) basket: Array<CartItemDTO>
  ): Promise<Array<CartItem> | InternalServerErrorException> {
    return this.cartService.writeBasket(basket);
  }
}
