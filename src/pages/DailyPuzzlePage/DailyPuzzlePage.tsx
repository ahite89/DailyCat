import { usePuzzle } from "../../hooks/usePuzzle";
import styles from "./DailyPuzzlePage.module.css";

import Header from "../../components/Header/Header";
import Image from "../../components/Image/Image";
import Sentence from "../../components/Sentence/Sentence";
import Button from "../../components/Button/Button";
import Divider from "../../components/Divider/Divider";
import StatusArea from "../../components/StatusArea/StatusArea";

export default function DailyPuzzlePage() {
    const {
      puzzle,
      words,
      livesRemaining,
      updateGuess,
      checkAnswers,
      gameStatus,
      displayStatus,
      isChecking,
      shouldShake,
    } = usePuzzle();

    return (
        <main className={styles.page}>
            <Header puzzleNumber={puzzle.id} date={new Date()} />
            <Divider />
            <Image imageUrl={puzzle.imageUrl} />
            <Divider />
            <Sentence words={words} onGuessChange={updateGuess} shouldShake={shouldShake} />
            <Divider />
            <StatusArea gameStatus={displayStatus} livesRemaining={livesRemaining} />
            <Divider />
            <Button 
                onClick={checkAnswers} 
                disabled={gameStatus !== "playing" || isChecking} 
                variant="primary"
                aria-label="Check Answers"
            >
                Check Answers
            </Button>
        </main>
    );
};