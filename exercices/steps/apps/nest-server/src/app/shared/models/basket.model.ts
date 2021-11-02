interface ICartItem {
  bookId: string;
  bookName: string;
  quantity: number;
}

export const CART_ITEM_SCHEMA = {
  type: 'object',
  properties: {
    bookId: { type: 'string' },
    bookName: { type: 'string' },
    quantity: { type: 'number' },
  },
};

export type CartItem = Readonly<ICartItem>;
