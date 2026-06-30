import type { GameWord } from "./puzzle";

export type SentenceProps = {
    words: GameWord[];
    onGuessChange: (wordId: number, guess: string) => void;
};

export type WordProps = GameWord & {
    onGuessChange: (
        id: number,
        guess: string
    ) => void;
};