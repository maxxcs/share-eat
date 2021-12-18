import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import type { MouseEvent } from "react";

interface IHeaderProps {
  displayBg: boolean;
  handleClose?: (event: MouseEvent) => void;
}

function Header({ displayBg, handleClose }: IHeaderProps) {
  const bgComponent = displayBg ? (
    <div className={`f-row ctr ${styles.background}`}>
      <Image
        src="/background-effect.svg"
        alt="Share Eat"
        width={455}
        height={227}
      />
    </div>
  ) : null;

  const closeButton =
    typeof handleClose === "function" ? (
      <button
        className={`f-row ctr ${styles.back}`}
        type="button"
        onClick={handleClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </button>
    ) : null;

  return (
    <header className={`f-col ctr ${styles.container}`}>
      <div className="f-row ctr">
        {closeButton}
        <Link href="/">
          <a>
            <Image src="/logo.svg" alt="Share Eat" width={96} height={18} />
          </a>
        </Link>
      </div>
      {bgComponent}
    </header>
  );
}

export default Header;
