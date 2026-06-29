export type SentenceProps = {
    words: GuessProps[];
    onGuessChange: (wordId: number, guess: string) => void;
};

export type WordProps = {
    id: number;
    answer: string;
    hidden: boolean;
};

export type GuessProps = WordProps & {
    guess: string;
    solved: boolean;
};