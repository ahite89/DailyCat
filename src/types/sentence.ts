import type { GameWord } from "./puzzle";

export type SentenceProps = {
    words: GameWord[];
    onGuessChange: (wordId: number, guess: string) => void;
    shouldShake: boolean;
};

export type WordProps = GameWord & {
    onGuessChange: (
        id: number,
        guess: string
    ) => void;
};