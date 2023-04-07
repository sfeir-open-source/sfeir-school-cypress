import Grid from '../../components/books/grid/grid';
import ThreeColumns from '../three-columns/three-columns';
import {useParams} from "react-router-dom";

export interface GenreProps {
  genreId: string;
}

export function Genre() {
  let params = useParams();
  return (
    <ThreeColumns>
      <Grid genreId={params.genre!} />
    </ThreeColumns>
  );
}

export default Genre;
