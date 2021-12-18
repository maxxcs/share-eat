import { memo, useCallback, useContext, useEffect } from "react";
import styles from "./Modal.module.css";
import Header from "../layout/Header";
import AppContext from "../Context";
import Input from "./Input";
import Textarea from "./Textarea";

function Modal() {
  const { state, setState } = useContext(AppContext);

  const handleClose = useCallback(() => {
    setState({ ...state, diplayModal: false });
  }, [setState, state]);

  useEffect(() => {
    if (process.browser) {
      if (state.diplayModal) document.documentElement.style.overflow = "hidden";
      else document.documentElement.style.overflow = "initial";
    }
  }, [state.diplayModal]);

  return state.diplayModal ? (
    <div className={`f-col ctr ${styles.backdrop}`}>
      <form className={`f-col ctr ${styles.modal}`}>
        <Header displayBg={false} handleClose={handleClose} />
        <div className="f-col">
          <h2>{state.actualPlace?.name}</h2>
          <Input name="Nome do prato" placeholder="Prato" />
          <Input name="Valor" placeholder="0,00" />
          <Textarea
            name="Descrição do prato"
            obs="A descrição deve conter até 200 caracteres"
            placeholder="Insira uma descrição"
          />
          <button className={`f-row ctr ${styles.submit}`} type="submit">
            Salvar
          </button>
        </div>
      </form>
    </div>
  ) : null;
}

export default memo(Modal);
