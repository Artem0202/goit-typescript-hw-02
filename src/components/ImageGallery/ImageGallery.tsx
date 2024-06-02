import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({
  items,
  onOpenModal,
}: {
  items: any;
  onOpenModal: Function;
}) {
  return (
    <ul className={css.list}>
      {items.map((item: any) => (
        <li key={item.id}>
          <ImageCard data={item} onOpenModal={onOpenModal} />
        </li>
      ))}
    </ul>
  );
}
