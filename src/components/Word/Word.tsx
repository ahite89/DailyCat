import type { WordProps } from "../../types/sentence";
import styles from "./Word.module.css";

export default function Word({ 
    id,
    answer,
    guessable,
    guess,
    solved,
    status,
    onGuessChange
}: WordProps) {
    
    const wordWidth = `${Math.max(answer.length, 3)}ch`;

    if (!guessable) {
        return <span className={styles.visibleWord}>{answer}</span>;
    }

    return (
        <input
            className={[
                styles.wordInput,
                solved ? styles.solvedInput : "",
                status === "incorrect" ? styles.incorrectInput : "",
            ].join(" ")}
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