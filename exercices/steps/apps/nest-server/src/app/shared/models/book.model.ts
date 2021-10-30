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
