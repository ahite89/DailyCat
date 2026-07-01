import { useState, useEffect } from "react";
import { useDailyPuzzle } from "./useDailyPuzzle";
import { createGameWords } from "../utils/createGameWords";
import { TOTAL_LIVES } from "../constants/constants";

export function usePuzzle() {
  const puzzle = useDailyPuzzle();

  const [words, setWords] = useState(
    createGameWords(puzzle.words)
  );

  const [livesRemaining, setLivesRemaining] = useState(TOTAL_LIVES);

  const gameStatus =
    livesRemaining === 0
      ? "lost"
      : words.every((word) => word.solved)
        ? "won"
        : "playing";

  const revealAnswers = () => {
    setWords((currentWords) =>
      currentWords.map((word) => ({
        ...word,
        guess: word.answer,
        solved: true,
      }))
    );
  };

  useEffect(() => {
    if (livesRemaining === 0) {
      revealAnswers();
    }
  }, [livesRemaining]);

  const updateGuess = (wordId: number, guess: string) => {
    setWords((currentWords) =>
      currentWords.map((word) =>
        word.id === wordId ? { ...word, guess } : word
      )
    );
  };

  const checkAnswers = () => {
    let hasIncorrectGuess = false;

    const updatedWords = words.map((word) => {
      if (!word.guessable || word.solved) {
        return word;
      }

      const isCorrect =
        word.guess.trim().toLowerCase() ===
        word.answer.toLowerCase();

      if (!isCorrect) {
        hasIncorrectGuess = true;
      }

      return {
        ...word,
        solved: isCorrect,
        guess: isCorrect ? word.answer : "",
      };
    });

    setWords(updatedWords);

    if (hasIncorrectGuess) {
      setLivesRemaining((lives) => lives - 1);
    }
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