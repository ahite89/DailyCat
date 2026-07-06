import type { HeaderProps } from "../../types/header";
import CatIcon from "../CatIcon/CatIcon";
import styles from "./Header.module.css";

export default function Header({ puzzleNumber, date }: HeaderProps) {
    return (
        <header className={styles.header}>
            <CatIcon className={styles.logo} />
            <h1 className={styles.title}>Daily Cat</h1>
            <p className={styles.metaData}>
                #{puzzleNumber} <span aria-hidden="true">•</span>{" "}
                {date.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
                })}
            </p>
        </header>
    );
};