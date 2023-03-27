import './item.module.scss';

/* eslint-disable-next-line */
export interface ItemProps {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
}

export function Item({ id, title, author, imageUrl }: ItemProps) {
  return (
    <div data-cy={`cart-item-${id}`} className="flex flex-row gap-4">
      <img src={imageUrl} alt={title} className="w-16 h-24" />
      <div className="flex flex-col">
        <div className="overflow-hidden">{title}</div>
        <div className="italic">{author}</div>
      </div>
    </div>
  );
}

export default Item;
