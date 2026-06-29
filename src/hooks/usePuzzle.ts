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

  const updateGuess = (wordId: number, guess: string) => {
    setWords((currentWords) =>
      currentWords.map((word) =>
        word.id === wordId ? { ...word, guess } : word
      )
    );
  };

  const checkAnswers = () => {
    setWords((currentWords) =>
      currentWords.map((word) => {
        if (!word.hidden || word.solved) {
          return word;
        }

        const isCorrect =
          word.guess.trim().toLowerCase() === word.answer.toLowerCase();

        return {
          ...word,
          solved: isCorrect,
          guess: isCorrect ? word.answer : "",
        };
      })
    );

    setLivesRemaining((lives) => lives - 1);
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