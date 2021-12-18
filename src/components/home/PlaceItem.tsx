import { memo, useCallback, useContext } from "react";
import Link from "next/link";
import styles from "./PlaceItem.module.css";
import AppContext from "../Context";

interface IPlaceItemProps {
  id: number;
  name: string;
  dishes: number;
}

function PlaceItem({ id, name, dishes }: IPlaceItemProps) {
  const { setState } = useContext(AppContext);

  const handleOpenModal = useCallback(() => {
    setState({ diplayModal: true, actualPlace: { id, name } });
  }, [id, name, setState]);

  return (
    <li className={`f-row ctr ${styles.container}`}>
      <Link href={`/restaurant/${id}`}>
        <a className={`f-col ${styles.box}`}>
          <h3>{name}</h3>
          <p>{dishes} pratos</p>
        </a>
      </Link>
      <button
        className={`f-row ctr ${styles.button}`}
        type="button"
        onClick={handleOpenModal}
      >
        +
      </button>
    </li>
  );
}

export default memo(PlaceItem);
