import type { WordProps } from "../../types/sentence";
import styles from "./Word.module.css";

export default function Word({ 
    id,
    answer,
    guessable,
    guess,
    solved,
    status,
    onGuessChange,
    tightenSentence
}: WordProps) {
    
    const wordWidth = `${Math.max(answer.length, 3)}ch`;

    if (!guessable) {
        return <span className={styles.visibleWord}>{answer}</span>;
    }

    if (solved) {
        return (
            <span
                className={[
                    styles.solvedWord,
                    status === "flipping" ? styles.flip : "",
                    status === "correct" ? styles.correct : "",
                ].join(" ")}
                style={
                    tightenSentence
                    ? undefined
                    : { width: wordWidth }
                }
            >
                {answer}
            </span>
        );
    }

    return (
        <input
            name={`word` + id.toString()}
            className={[
                styles.wordInput,
                status === "incorrect" ? styles.incorrectInput : "",
            ].join(" ")}
            value={guess}
            onChange={(event) => onGuessChange(id, event.target.value)}
            style={{ width: wordWidth }}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            aria-label={`Guess ${answer.length}-letter word`}
        />
    );
};