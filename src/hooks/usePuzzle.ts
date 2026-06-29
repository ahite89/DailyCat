import { useState } from "react";
import { useDailyPuzzle } from "./useDailyPuzzle";
import { createGameWords } from "../utils/createGameWords";

export function usePuzzle() {
  const puzzle = useDailyPuzzle();

  const [words, setWords] = useState(
    createGameWords(puzzle.words)
  );

  const [livesRemaining, setLivesRemaining] = useState(4);

  const gameStatus =
    words.every((word) => word.solved)
      ? "won"
      : livesRemaining === 0
        ? "lost"
        : "playing";

  const updateGuess = () => {
    // TBD
  };

  const checkAnswers = () => {
    // TBD
  };

  return {
    puzzle,
    words,
    livesRemaining,
    updateGuess,
    checkAnswers,
    gameStatus,
  };
}