interface IBasketItem {
  bookId: string;
  bookName: string;
  quantity: number;
}

export const BASKET_ITEM_SCHEMA = {
  type: 'object',
  properties: {
    bookId: { type: 'string' },
    bookName: { type: 'string' },
    quantity: { type: 'number' },
  },
};

export type BasketItem = Readonly<IBasketItem>;
