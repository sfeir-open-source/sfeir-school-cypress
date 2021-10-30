interface IGenre {
  label: string;
  query: string;
}

export enum GenreQuery {
  HISTORY = 'history',
  DRAMA = 'drama',
  LITTERATURE = 'litterature',
  POETRY = 'poetry',
  SCIENCE_FICTION = 'science-fiction',
}

export type Genre = Readonly<IGenre>;
