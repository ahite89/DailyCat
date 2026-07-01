import { usePuzzle } from "../hooks/usePuzzle";

import Header from "../components/Header";
import Image from "../components/Image/Image";
import Sentence from "../components/Sentence/Sentence";
import Lives from "../components/Lives/Lives";
import CheckButton from "../components/CheckButton";
import ResultMessage from "../components/ResultMessage/ResultMessage";

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
        <main>
            <Header puzzleNumber={puzzle.id} date={new Date()} />
            <Image imageUrl={puzzle.imageUrl} />
            <Sentence words={words} onGuessChange={updateGuess}/>
            <Lives livesRemaining={livesRemaining} />
            <CheckButton checkAnswers={checkAnswers} gameStatus={gameStatus}/>

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