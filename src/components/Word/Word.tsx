import type { WordProps } from "../../types/sentence";
import styles from "./Word.module.css";

export default function Word({ 
    id,
    answer,
    guessable,
    guess,
    solved,
    onGuessChange
}: WordProps) {
    
    const wordWidth = `${Math.max(answer.length, 3)}ch`;

    if (!guessable) {
        return <span className={styles.visibleWord}>{answer}</span>;
    }

    return (
        <input
            className={solved ? styles.solvedInput : styles.wordInput}
            value={solved ? answer : guess}
            onChange={(event) => onGuessChange(id, event.target.value)}
            readOnly={solved}
            style={{ width: wordWidth }}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            aria-label={`Guess ${answer.length}-letter word`}
        />
    );
};