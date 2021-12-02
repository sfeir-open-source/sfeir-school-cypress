import { useContext, useMemo } from 'react';
import { GenresContext } from '../../../contexts/genre-provider';
import Header from '../../lib/header/header';
import Item from '../item/item';
import './grid.module.scss';
import usePagination from './usePagination';
import useScrollListener from './useScrollListener';

export interface GridProps {
  genreId: string;
}

const DEFAULT_TITLE = 'Lets find some books : ';

export function Grid({ genreId, ...passThroughProps }: GridProps) {
  const genres = useContext(GenresContext);
  const page = usePagination(genreId);

  useScrollListener(page?.next || null);

  const genreLabel = useMemo(() => {
    if (!genres) {
      return DEFAULT_TITLE;
    }

    return genres.find(g => g.query === genreId)?.label || DEFAULT_TITLE;
  }, [genreId, genres]);

  return (
    <section data-cy="genre-grid" {...passThroughProps}>
      <Header label={genreLabel} />
      <div data-cy="genre-grid-content" className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {page?.books ? page?.books.map(item => <Item key={item.id} book={item} />) : <span aria-label="Loading" />}
      </div>
    </section>
  );
}

export default Grid;
