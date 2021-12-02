import { useRef, useState, useLayoutEffect, useCallback } from 'react';
import { BookDTO } from '../../../api/book';
import Item from '../item/item';
import css from './list.module.scss';

type Items = BookDTO[] | null;
export interface ListProps {
  name: string;
  items: Items;
}

const PADDING = 120;

function useScroll(items: BookDTO[] | null) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasPrevious, setHasPrevious] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(false);

  useLayoutEffect(() => {
    const element = ref.current;

    if (!(element && items?.length)) {
      return;
    }

    const onScroll = () => {
      setHasPrevious(element.scrollLeft > PADDING);
      setHasNext(element.scrollLeft + element.offsetWidth - element.scrollWidth + PADDING < 0);
    };

    element.addEventListener('scroll', onScroll);
    onScroll(); // computes values on startup

    return () => {
      element.removeEventListener('scroll', onScroll);
    };
  }, [items]);

  const scrollBy = useCallback((nbViewport: number) => {
    const element = ref.current;
    if (!element) {
      return;
    }
    element.scrollBy({ left: nbViewport * element.offsetWidth, behavior: 'smooth' });
  }, []);

  const scrollPrevious = useCallback(() => {
    scrollBy(-1);
  }, [scrollBy]);

  const scrollNext = useCallback(() => {
    scrollBy(1);
  }, [scrollBy]);

  return { ref, hasPrevious, hasNext, scrollPrevious, scrollNext };
}

export function List({ name, items, ...props }: ListProps) {
  const { ref, hasPrevious, hasNext, scrollPrevious, scrollNext } = useScroll(items);
  return (
    <section {...props}>
      <h3 className="p-8 text-lg bold">{name}</h3>
      <div className={css.content}>
        <div className={css.buttonWrapper}>
          {hasPrevious && (
            <button onClick={scrollPrevious} className={css.button} data-cy="previous">
              &#x3008;
            </button>
          )}
        </div>
        <div ref={ref} className="flex overflow-x-auto gap-6 md:gap-12 flex-nowrap">
          {items ? items.map(item => <Item key={item.id} book={item} />) : <span aria-label="Loading" />}
        </div>
        <div className={css.buttonWrapper}>
          {hasNext && (
            <button onClick={scrollNext} className={css.button} data-cy="next">
              &#x3009;
            </button>
          )}
        </div>
      </div>
      <hr />
    </section>
  );
}

export default List;
