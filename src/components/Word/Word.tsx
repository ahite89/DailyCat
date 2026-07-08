import type { WordProps } from "../../types/sentence";
import styles from "./Word.module.css";

export default function Word({ 
    id,
    answer,
    guessable,
    guess,
    solved,
    status,
    textWidth,
    onGuessChange,
    tightenSentence
}: WordProps) {
    
    const inputWidth = `${Math.max(answer.length, 3)}ch`;
    const solvedWidth = `${textWidth}px`;

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
                style={{
                    width: tightenSentence ? solvedWidth : inputWidth,
                }}
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
            style={{ width: inputWidth }}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            aria-label={`Guess ${answer.length}-letter word`}
        />
    );
};