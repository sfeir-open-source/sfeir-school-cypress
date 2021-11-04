import { Cart, CART_ITEM_SCHEMA } from '@nest-server/app/shared/models/basket.model';
import { INTERNAL_SERVER_SCHEMA } from '@nest-server/app/shared/models/error.model';
import { Body, Controller, Get, HttpCode, Put } from '@nestjs/common';
import { ApiBody, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BooksService } from '../books/books.service';
import { AddCartItemDTO } from './add-cart-item.dto';
import { CartItemDTO } from './cart-item.dto';
import { CartService } from './cart.service';

@Controller('cart')
@ApiTags('cart')
export class BasketController {
  constructor(private readonly cartService: CartService, private readonly booksService: BooksService) {}

  @Get()
  @ApiInternalServerErrorResponse({ status: 500, description: 'Internal server error', schema: INTERNAL_SERVER_SCHEMA })
  @ApiOkResponse({ status: 200, description: 'The user basket', schema: { type: 'array', items: CART_ITEM_SCHEMA } })
  async getBasket(): Promise<CartItemDTO[]> {
    const cart = await this.cartService.readBasket();
    return this.mapCartToItemDTO(cart);
  }

  @Put()
  @ApiInternalServerErrorResponse({ status: 500, description: 'Internal server error', schema: INTERNAL_SERVER_SCHEMA })
  @ApiOkResponse({ status: 200, description: 'The user basket', schema: { type: 'array', items: CART_ITEM_SCHEMA } })
  @HttpCode(200)
  @ApiBody({ type: AddCartItemDTO })
  async addToBasket(
    @Body() cartItem: AddCartItemDTO
  ): Promise<CartItemDTO[]> {
    const cart = await this.cartService.writeItem(cartItem);
    return this.mapCartToItemDTO(cart);
  }

  private mapCartToItemDTO(cart: Cart): CartItemDTO[] {
    return this.booksService.getAll(Object.keys(cart))
      .map(book => ({
        book,
        quantity: cart[book.id]
      }));
  }
}
