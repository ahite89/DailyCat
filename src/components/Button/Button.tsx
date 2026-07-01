import type { ButtonProps } from "../../types/button";
import styles from "./Button.module.css";

export default function Button({ text, onClick, disabled = false }: ButtonProps) {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};