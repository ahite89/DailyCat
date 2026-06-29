import { useState } from "react";

import { Header } from "../components/Header";
import { Image } from "../components/Image";
import { Sentence } from "../components/Sentence";
import { Lives } from "../components/Lives";
import { CheckButton } from "../components/CheckButton";
import { useDailyPuzzle } from "../hooks/useDailyPuzzle";

export const DailyPuzzlePage = () => {

    const puzzle = useDailyPuzzle();
    
    const [livesRemaining, setLivesRemaining] = useState<number>(4);
    const [guess, setGuess] = useState<string>("");
    
    const decrementLives = (): void => {
        setLivesRemaining(livesRemaining - 1);
    };

    const checkAnswers = (): void => {
        let answer = "My cat is...";
        if (guess === answer) {
            // you win
        }
        else {
            decrementLives();
        }
    };

    return (
        <>
            <Header puzzleNumber={puzzle.id} date={new Date()} />
            <Image imageUrl={puzzle.imageUrl} />
            <Sentence words={puzzle.words}/>
            <Lives livesRemaining={livesRemaining} />
            <CheckButton checkAnswers={checkAnswers}/>
        </>
    );
};