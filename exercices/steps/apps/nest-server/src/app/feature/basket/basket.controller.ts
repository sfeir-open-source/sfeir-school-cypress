import { BasketItem, BASKET_ITEM_SCHEMA } from '@nest-server/app/shared/models/basket.model';
import { INTERNAL_SERVER_SCHEMA } from '@nest-server/app/shared/models/error.model';
import { Body, Controller, Get, HttpCode, InternalServerErrorException, ParseArrayPipe, Put } from '@nestjs/common';
import { ApiBody, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BasketItemDTO } from './basket-item.dto';
import { BasketService } from './basket.service';

@Controller('basket')
@ApiTags('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @Get()
  @ApiInternalServerErrorResponse({ status: 500, description: 'Internal server error', schema: INTERNAL_SERVER_SCHEMA })
  @ApiOkResponse({ status: 200, description: 'The user basket', schema: { type: 'array', items: BASKET_ITEM_SCHEMA } })
  async getBasket(): Promise<Array<BasketItem> | InternalServerErrorException> {
    return await this.basketService.readBasket();
  }

  @Put()
  @ApiInternalServerErrorResponse({ status: 500, description: 'Internal server error', schema: INTERNAL_SERVER_SCHEMA })
  @ApiOkResponse({ status: 200, description: 'The user basket', schema: { type: 'array', items: BASKET_ITEM_SCHEMA } })
  @HttpCode(200)
  @ApiBody({ type: [BasketItemDTO] })
  async addToBasket(
    @Body(new ParseArrayPipe({ items: BasketItemDTO })) basket: Array<BasketItemDTO>
  ): Promise<Array<BasketItem> | InternalServerErrorException> {
    return this.basketService.writeBasket(basket);
  }
}
