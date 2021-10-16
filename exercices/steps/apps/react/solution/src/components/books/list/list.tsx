import { useRef, useState, useLayoutEffect, useCallback } from 'react'
import { BookDTO } from '../../../api/book'
import Item from '../item/item'
import css from './list.module.scss'

type Items = BookDTO[] | null;
export interface ListProps {
  name: string,
  items: Items
}

function useScroll (items: BookDTO[]|null) {
  const ref = useRef<HTMLDivElement|null>(null)
  const [hasPrevious, setHasPrevious] = useState<boolean>(false)
  const [hasNext, setHasNext] = useState<boolean>(false)

  useLayoutEffect(() => {
    if (!items?.length) {
      return
    }

    const element = ref.current
    const firstChild = element?.firstElementChild
    const lastChild = element?.lastElementChild
    if (!(element && firstChild && lastChild)) {
      return undefined
    }

    const onScroll = () => {
      const firstChildX = firstChild.getBoundingClientRect().x
      setHasPrevious(firstChildX < 0)
      setHasNext(lastChild.getBoundingClientRect().x > element.clientWidth)
    }

    element.addEventListener('scroll', onScroll)
    onScroll() // computes values on startup

    return () => {
      element.removeEventListener('scroll', onScroll)
    }
  }, [items])

  const scrollBy = useCallback((nbViewport: number) => {
    const element = ref.current
    if (!element) {
      return
    }
    element.scrollBy({ left: nbViewport * element.offsetWidth, behavior: 'smooth' })
  }, [])

  const scrollPrevious = useCallback(() => {
    scrollBy(-1)
  }, [scrollBy])

  const scrollNext = useCallback(() => {
    scrollBy(1)
  }, [scrollBy])

  return { ref, hasPrevious, hasNext, scrollPrevious, scrollNext }
}

export function List ({ name, items, ...props }: ListProps) {
  const { ref, hasPrevious, hasNext, scrollPrevious, scrollNext } = useScroll(items)
  return (
    <section {...props}>
      <h3 className="p-8 text-lg bold">{name}</h3>
      <div className={css.content}>
        <div className={css.buttonWrapper}>
          {hasPrevious && <button onClick={scrollPrevious} className={css.button} data-cy="previous">&#x3008;</button>}
        </div>
        <div ref={ref} className="flex px-8 overflow-x-auto gap-16 flex-nowrap">
          {
            items
              ? items.map(item => <Item book={item} />)
              : <span aria-label="Loading" />
          }
        </div>
        <div className={css.buttonWrapper}>
        {hasNext && <button onClick={scrollNext} className={css.button} data-cy="next">&#x3009;</button>}
        </div>
      </div>
    </section>
  )
}

export default List
