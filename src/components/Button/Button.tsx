import type { ButtonProps } from "../../types/button";
import styles from "./Button.module.css";

export default function Button({ 
    children, 
    onClick, 
    variant, 
    disabled = false,
    ...props 
}: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${styles[variant]}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};