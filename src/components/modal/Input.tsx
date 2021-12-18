import { CSSProperties, HTMLProps } from "react";
import styles from "./Input.module.css";

interface IInputProps {
  type: string;
  name: string;
  value?: string;
  wrapper?: { style: CSSProperties; text: string };
  props?: HTMLProps<HTMLInputElement>;
  [key: string]: any;
}

function Input({ type, name, value, wrapper, ...props }: IInputProps) {
  return (
    <label className={`f-col ${styles.container}`}>
      <span>{name}</span>
      <div className="f-row ctr" style={wrapper?.style}>
        <span>{wrapper?.text}</span>
        <input type={type} value={value} {...props} />
      </div>
    </label>
  );
}

export default Input;
