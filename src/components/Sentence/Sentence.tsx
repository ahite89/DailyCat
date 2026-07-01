import styles from "./Sentence.module.css";
import type { SentenceProps } from "../../types/sentence";
import Word from "../Word";

export default function Sentence({ words, onGuessChange }: SentenceProps) {
    return (
        <section className={styles.container}>
            <p className={styles.prefix}>My cat is...</p>
            <div className={styles.sentence}>
                {words.map((word) => (
                    <Word
                        key={word.id}
                        {...word}
                        onGuessChange={onGuessChange}
                    />
                ))}
            </div>
        </section>
    );
};