interface ICartItem {
  bookId: string;
  quantity: number;
}

interface ICart {
  [id: string] : number
}

export const CART_ITEM_SCHEMA = {
  type: 'object',
  properties: {
    bookId: { type: 'string' },
    quantity: { type: 'number' },
  },
};

export type Cart = Readonly<ICart>;
export type CartItem = Readonly<ICartItem>;
