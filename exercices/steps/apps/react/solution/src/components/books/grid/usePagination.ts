import { useState, useEffect, useCallback } from 'react';
import { BookDTO, findBooks } from '../../../api/book';

interface Pageable {
  hasMore: boolean;
  page: number;
  books: BookDTO[];
  next: (() => Promise<void>) | null;
}

type PageContent = Omit<Pageable, 'next'>;

export default function usePagination(genreId: string): Pageable | null {
  const [pageContent, setPageContent] = useState<PageContent | null>(null);

  useEffect(() => {
    findBooks(genreId, 1, 8)
      .then(page => ({
        books: page.content,
        hasMore: !page.isLast,
        page: 1,
      }))
      .then(setPageContent);
  }, [genreId]);

  const next = useCallback(() => {
    if (!(genreId && pageContent)) {
      return Promise.resolve();
    }

    if (!pageContent.hasMore) {
      return Promise.resolve();
    }

    const nextPage = pageContent.page + 1;
    return findBooks(genreId, nextPage, 8)
      .then(page => ({
        books: [...pageContent.books, ...page.content],
        hasMore: !page.isLast,
        page: nextPage,
      }))
      .then(setPageContent);
  }, [genreId, pageContent]);

  if (!pageContent) {
    return null;
  }

  return {
    ...pageContent,
    next: pageContent.hasMore ? next : null,
  };
}
