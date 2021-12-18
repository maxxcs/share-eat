import { memo } from "react";
import Link from "next/link";
import styles from "./PlaceItem.module.css";

interface IPlaceItemProps {
  id: number;
  name: string;
  dishes: number;
}

function PlaceItem({ id, name, dishes }: IPlaceItemProps) {
  return (
    <li className={`f-row ctr ${styles.container}`}>
      <Link href={`/restaurant/${id}`}>
        <a className={`f-col ${styles.box}`}>
          <h3>{name}</h3>
          <p>{dishes} pratos</p>
        </a>
      </Link>
      <button className={`f-row ctr ${styles.button}`} type="button">
        +
      </button>
    </li>
  );
}

export default memo(PlaceItem);
