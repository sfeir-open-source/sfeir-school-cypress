import { Book } from "./book.model";

interface ICartItem {
  bookId: string;
  quantity: number;
  price: number;
}

interface ICart {
  [key: string]: ICartItem
}

export const CART_ITEM_SCHEMA = {
  type: 'object',
  properties: {
    book: { type: 'book' },
    bookName: { type: 'string' },
    quantity: { type: 'number' },
  },
};

export type Cart = Readonly<ICart>
export type CartItem = Readonly<ICartItem>

export interface BookCartItem {
  book: Book;
  quantity: number;
  price: number;
}