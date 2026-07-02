import { usePuzzle } from "../../hooks/usePuzzle";
import styles from "./DailyPuzzlePage.module.css";

import Header from "../../components/Header/Header";
import Image from "../../components/Image/Image";
import Sentence from "../../components/Sentence/Sentence";
import Lives from "../../components/Lives/Lives";
import Button from "../../components/Button/Button";
import ResultMessage from "../../components/ResultMessage/ResultMessage";
import Divider from "../../components/Divider/Divider";

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
            <Divider />
            <Image imageUrl={puzzle.imageUrl} />
            <Divider />
            <Sentence words={words} onGuessChange={updateGuess}/>
            <Divider />
            <Lives livesRemaining={livesRemaining} />
            <Divider />
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
                    title="Nicely done!"
                    message="Check back tomorrow for another cat"
                />
            )}

            {gameStatus === "lost" && (
                <ResultMessage
                    title="Good try!"
                    message="Better luck on tomorrow’s cat"
                />
            )}
        </main>
    );
};