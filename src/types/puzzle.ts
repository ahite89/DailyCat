export type PuzzleProps = {
    id: number;
    imageUrl: string;
    words: PuzzleWord[];
};

export type PuzzleWord = {
    id: number;
    answer: string;
    guessable: boolean;
};

export type GameWord = PuzzleWord & {
    guess: string;
    solved: boolean;
};