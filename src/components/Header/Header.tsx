import type { HeaderProps } from "../../types/header";
import styles from "./Header.module.css";

export default function Header({ puzzleNumber, date }: HeaderProps) {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                🐱 Daily Cat #{puzzleNumber}
            </h1>
            <p className={styles.date}>
                {date.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
                })}
            </p>
        </header>
    );
};