import { memo } from "react";
import styles from "./ModalHandler.module.css";

function ModalHandler() {
  return <button className={`f-row ctr ${styles.handler}`}>+</button>;
}

export default memo(ModalHandler);
