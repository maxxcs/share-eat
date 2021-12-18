import styles from "./Textarea.module.css";

interface ITextareaProps {
  name: string;
  placeholder?: string;
  max?: number;
  obs?: string;
}

function Textarea({ name, placeholder, max, obs }: ITextareaProps) {
  return (
    <>
      <label className={`f-col ${styles.container}`}>
        <span>{name}</span>
        <textarea placeholder={placeholder} maxLength={max}></textarea>
        {obs ? <p className={styles.obs}>* {obs}.</p> : null}
      </label>
    </>
  );
}

export default Textarea;
