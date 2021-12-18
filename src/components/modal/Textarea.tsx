import styles from "./Textarea.module.css";

interface ITextareaProps {
  name: string;
  obs?: string;
  placeholder?: string;
}

function Textarea({ name, obs, placeholder }: ITextareaProps) {
  return (
    <>
      <label className={`f-col ${styles.container}`}>
        <span>{name}</span>
        <textarea placeholder={placeholder}></textarea>
      </label>
      {obs ? <p className={styles.obs}>* {obs}.</p> : null}
    </>
  );
}

export default Textarea;
