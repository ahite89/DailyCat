export type SentenceProps = {
    words: GuessProps[];
};

export type WordProps = {
    id: number;
    answer: string;
    hidden: boolean;
};

export type GuessProps = WordProps & {
    guess: string;
    solved: boolean;
    // onChange: (value: string) => void;
};