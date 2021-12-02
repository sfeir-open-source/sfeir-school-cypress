import Grid from '../../components/books/grid/grid';
import ThreeColumns from '../three-columns/three-columns';

export interface GenreProps {
  genreId: string;
}

export function Genre({ genreId }: GenreProps) {
  return (
    <ThreeColumns>
      <Grid genreId={genreId} />
    </ThreeColumns>
  );
}

export default Genre;
