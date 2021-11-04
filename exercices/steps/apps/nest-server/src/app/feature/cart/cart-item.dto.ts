import { Book } from "@nest-server/app/shared/models/book.model";

export class CartItemDTO {
    book: Book;
    quantity: number;
}