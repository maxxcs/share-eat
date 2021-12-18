import { memo } from "react";
import styles from "./DishItem.module.css";
import type { IMenuItem } from "../../utils/types";

function DishItem({ name, description, price }: IMenuItem) {
  return (
    <li className={`f-col ${styles.container}`}>
      <div className={`f-row ${styles.header}`}>
        <h2>{name}</h2>
        <strong>R$ {price}</strong>
      </div>
      <p>{description}</p>
    </li>
  );
}

export default memo(DishItem);
