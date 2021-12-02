import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { findGenres } from '../api/book';

export interface Genre {
  query: string;
  label: string;
}

export type Genres = Genre[] | null;

export const GenresContext = createContext<Genres>(null);

function useGenres(): Genres {
  const [genres, setGenres] = useState<Genres>(null);

  useEffect(() => {
    findGenres()
      .then(genresDTO =>
        genresDTO
          .sort((a, b) => a.label.localeCompare(b.label))
          .map(genre => ({
            query: genre.query,
            label: genre.label,
          }))
      )
      .then(setGenres);
  }, []);

  return genres;
}

/* eslint-disable-next-line */
export interface GenreContextProps {}

export function GenreProvider({ children }: PropsWithChildren<GenreContextProps>) {
  const genres = useGenres();

  return <GenresContext.Provider value={genres}>{children}</GenresContext.Provider>;
}

export default GenreProvider;
