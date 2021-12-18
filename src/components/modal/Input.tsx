import styles from "./Input.module.css";

interface IInputProps {
  name: string;
  placeholder?: string;
  value?: string;
}

function Input({ name, placeholder, value }: IInputProps) {
  return (
    <label className={`f-col ${styles.container}`}>
      <span>{name}</span>
      <input type="text" value={value} placeholder={placeholder} />
    </label>
  );
}

export default Input;
