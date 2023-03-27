import GenreList from '../../components/genre/list/list';
import Top from '../../components/books/top/top';
import ThreeColumns from '../three-columns/three-columns';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <ThreeColumns>
      <Top />
      <GenreList />
    </ThreeColumns>
  );
}

export default Home;
