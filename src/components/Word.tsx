import type { WordProps } from "../types/sentence";

export default function Word({ 
    id,
    answer,
    guessable,
    guess,
    solved,
    onGuessChange
}: WordProps) {
    if (!guessable || solved) {
        return <span>{answer}</span>;
    }

    return (
        <input
            value={guess}
            onChange={(event) => onGuessChange(id, event.target.value)}
            size={answer.length}
            autoCapitalize="none"
            autoComplete="off"
            spellCheck={false}
        />
    );
};