import {
  memo,
  useCallback,
  useContext,
  useEffect,
  MouseEvent,
  useRef,
} from "react";
import styles from "./Modal.module.css";
import Header from "../layout/Header";
import AppContext from "../Context";
import Input from "./Input";
import Textarea from "./Textarea";

function Modal() {
  const { state, setState } = useContext(AppContext);
  const backdropRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setState({ ...state, diplayModal: false });
  }, [setState, state]);

  const handleBackdropClick = useCallback(
    (evt: MouseEvent) => {
      if (backdropRef.current?.isSameNode(evt.target as Node)) handleClose();
    },
    [handleClose]
  );

  useEffect(() => {
    if (process.browser) {
      if (state.diplayModal) document.documentElement.style.overflow = "hidden";
      else document.documentElement.style.overflow = "initial";
    }
  }, [state.diplayModal]);

  return state.diplayModal ? (
    <div
      className={`f-col ${styles.backdrop}`}
      onClick={handleBackdropClick}
      ref={backdropRef}
    >
      <form className={`f-col ctr ${styles.modal}`}>
        <Header displayBg={false} handleClose={handleClose} />
        <div className="f-col">
          <h2>{state.actualPlace?.name}</h2>
          <Input type="text" name="Nome do prato" placeholder="Prato" />
          <Input
            type="number"
            name="Valor"
            placeholder="0,00"
            wrapper={{ text: "R$", style: { width: "111px" } }}
          />
          <Textarea
            name="Descrição do prato"
            placeholder="Insira uma descrição"
            obs="A descrição deve conter até 200 caracteres"
            max={200}
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
