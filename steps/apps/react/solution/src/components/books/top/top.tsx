import { HeartIcon } from '@heroicons/react/solid';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookDTO, findTop10Books } from '../../../api/book';
import { UserContext } from '../../../contexts/user-provider';
import BookList from '../list/list';

import './top.module.scss';

/* eslint-disable-next-line */
export interface TopProps {}

export function Top(props: TopProps) {
  const { user } = useContext(UserContext);
  const [books, setBooks] = useState<BookDTO[] | null>(null);

  useEffect(() => {
    if (user) {
      findTop10Books().then(setBooks);
    }
  }, [user]);

  return user ? (
    <BookList data-cy="top-10-books" name="Top 10" items={books} {...props} />
  ) : (
    <div
      data-cy="top-10-login-placeholder"
      className="flex justify-around p-8 mx-8 my-4 bg-gray-200 border border-gray-300 rounded-md"
    >
      <HeartIcon className="w-16 h-16" />
      <div className="flex flex-col">
        <span className="pb-4 text-lg">Let us guess your next favourite books !</span>
        <div>
          <span>
            Just <Link to="signin">log in</Link>, and enjoy our best books, chosen just for you !
          </span>
        </div>
      </div>
    </div>
  );
}

export default Top;
