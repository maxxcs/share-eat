import { memo, useCallback } from "react";
import styles from "./DishesList.module.css";
import DishItem from "./DishItem";
import type { IMenuItem } from "../../utils/types";

interface IDishesListProps {
  name: string;
  dishes: Array<IMenuItem>;
}

function DishesList({ name, dishes }: IDishesListProps) {
  const handleRenderList = useCallback(
    () =>
      dishes?.map((entry: IMenuItem, index: number) => (
        <DishItem
          key={index}
          name={entry.name}
          price={entry.price}
          description={entry.description}
        />
      )),
    [dishes]
  );

  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <p>{dishes?.length} pratos</p>
      <ul>{handleRenderList()}</ul>
    </div>
  );
}

export default memo(DishesList);
