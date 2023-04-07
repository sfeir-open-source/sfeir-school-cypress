interface IPaginator<T> {
  page: number;
  itemsPerPage: number;
  isFirst: boolean;
  isLast: boolean;
  content: Array<T>;
}

export type Paginator<T> = Readonly<IPaginator<T>>;
