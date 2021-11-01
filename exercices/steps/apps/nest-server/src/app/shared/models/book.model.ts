interface IBook {
  id: string;
  imageUrl: string;
  date: string;
  title: string;
  author: string;
  genre: string;
  genreId: string;
}

export type Book = Readonly<IBook>;

export const BOOK_SCHEMA = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    imageUrl: { type: 'string' },
    date: { type: 'string' },
    title: { type: 'string' },
    author: { type: 'string' },
    genre: { type: 'string' },
    genreId: { type: 'string' },
  },
};
