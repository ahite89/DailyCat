import { usePuzzle } from "../hooks/usePuzzle";
import Header from "../components/Header";
import Image from "../components/Image/Image";
import Sentence from "../components/Sentence/Sentence";
import Lives from "../components/Lives/Lives";
import CheckButton from "../components/CheckButton";

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

            {gameStatus === "won" && <p>You solved it!</p>}
            {gameStatus === "lost" && <p>You ran out of lives!</p>}
        </main>
    );
};