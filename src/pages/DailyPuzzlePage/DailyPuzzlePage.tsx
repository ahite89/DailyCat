import { usePuzzle } from "../../hooks/usePuzzle";
import styles from "./DailyPuzzlePage.module.css";

import Header from "../../components/Header/Header";
import Image from "../../components/Image/Image";
import Sentence from "../../components/Sentence/Sentence";
import Lives from "../../components/Lives/Lives";
import Button from "../../components/Button/Button";
import ResultMessage from "../../components/ResultMessage/ResultMessage";

export default function DailyPuzzlePage() {
    const {
      puzzle,
      words,
      livesRemaining,
      updateGuess,
      checkAnswers,
      gameStatus,
    } = usePuzzle();

    return (
        <main className={styles.page}>
            <Header puzzleNumber={puzzle.id} date={new Date()} />
            <Image imageUrl={puzzle.imageUrl} />
            <Sentence words={words} onGuessChange={updateGuess}/>
            <Lives livesRemaining={livesRemaining} />
            <Button 
                onClick={checkAnswers} 
                disabled={gameStatus !== "playing"} 
                variant="primary"
                aria-label="Check Answers"
            >
                Check Answers
            </Button>

            {gameStatus === "won" && (
                <ResultMessage
                    title="You solved it!"
                    message="The full prompt has been revealed."
                />
            )}

            {gameStatus === "lost" && (
                <ResultMessage
                    title="Out of lives!"
                    message="Better luck on tomorrow’s cat."
                />
            )}
        </main>
    );
};