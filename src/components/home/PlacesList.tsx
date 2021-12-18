import { memo, useCallback } from "react";
import styles from "./PlacesList.module.css";
import PlaceItem from "./PlaceItem";
import type { IRestaurant } from "../../utils/types";

interface IPlacesListProps {
  places: Array<IRestaurant>;
}

function PlacesList({ places }: IPlacesListProps) {
  const handleRenderList = useCallback(
    () =>
      places.map((entry: IRestaurant, index: number) => (
        <PlaceItem
          key={index}
          id={index}
          name={entry.name}
          dishes={entry.menuItems.length}
        />
      )),
    [places]
  );

  return (
    <div className={styles.container}>
      <h2>Lugares</h2>
      <p>{places.length} lugares cadastrados</p>
      <ul>{handleRenderList()}</ul>
    </div>
  );
}

export default memo(PlacesList);
