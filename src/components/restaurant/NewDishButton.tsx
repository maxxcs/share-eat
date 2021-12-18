import { memo, useCallback, useContext } from "react";
import AppContext from "../Context";
import styles from "./NewDishButton.module.css";

function NewDishButton() {
  const { state, setState } = useContext(AppContext);

  const handleOpenModal = useCallback(() => {
    setState({ ...state, diplayModal: true });
  }, [setState, state]);

  return (
    <button className={`f-row ctr ${styles.handler}`} onClick={handleOpenModal}>
      +
    </button>
  );
}

export default memo(NewDishButton);
