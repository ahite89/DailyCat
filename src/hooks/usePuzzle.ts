import { useState } from "react";
import { useDailyPuzzle } from "./useDailyPuzzle";
import { createGameWords } from "../utils/createGameWords";
import { TOTAL_LIVES } from "../constants/constants";

const sleep = (ms: number) =>
  new Promise((resolve) => window.setTimeout(resolve, ms));

export function usePuzzle() {
  const puzzle = useDailyPuzzle();

  const [words, setWords] = useState(createGameWords(puzzle.words));
  const [livesRemaining, setLivesRemaining] = useState(TOTAL_LIVES);
  const [isChecking, setIsChecking] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);

  const gameStatus =
    livesRemaining === 0
      ? "lost"
      : words.every((word) => word.solved)
        ? "won"
        : "playing";

  const updateGuess = (wordId: number, guess: string) => {
    if (isChecking || gameStatus !== "playing") return;

    setWords((currentWords) =>
      currentWords.map((word) =>
        word.id === wordId ? { ...word, guess } : word
      )
    );
  };

  const revealAnswersOneAtATime = async () => {
    setIsChecking(true);

    const unsolvedWords = words.filter(
      (word) => word.guessable && !word.solved
    );

    for (const word of unsolvedWords) {
      setWords((currentWords) =>
        currentWords.map((currentWord) =>
          currentWord.id === word.id
            ? {
                ...currentWord,
                guess: currentWord.answer,
                solved: true,
                status: "correct",
              }
            : currentWord
        )
      );

      await sleep(440);
    }

    setIsChecking(false);
  };

  const checkAnswers = async () => {
    if (isChecking || gameStatus !== "playing") return;

    const wordsToCheck = words.filter(
      (word) => word.guessable && !word.solved
    );

    const hasIncorrectGuess = wordsToCheck.some(
      (word) => word.guess.trim().toLowerCase() !== word.answer.toLowerCase()
    );

    setIsChecking(true);

    if (hasIncorrectGuess) {
      setShouldShake(true);
      await sleep(360);
      setShouldShake(false);
      await sleep(200);
    }

    for (const word of wordsToCheck) {
      const isCorrect =
        word.guess.trim().toLowerCase() === word.answer.toLowerCase();

      setWords((currentWords) =>
        currentWords.map((currentWord) =>
          currentWord.id === word.id
            ? {
                ...currentWord,
                solved: isCorrect,
                status: isCorrect ? "correct" : "incorrect",
                guess: isCorrect ? currentWord.answer : currentWord.guess,
              }
            : currentWord
        )
      );

      await sleep(440);

      if (!isCorrect) {
        setWords((currentWords) =>
          currentWords.map((currentWord) =>
            currentWord.id === word.id
              ? {
                  ...currentWord,
                  guess: "",
                  status: "idle",
                }
              : currentWord
          )
        );
      }
    }

    if (hasIncorrectGuess) {
      const nextLives = Math.max(livesRemaining - 1, 0);
      setLivesRemaining(nextLives);

      if (nextLives === 0) {
        await revealAnswersOneAtATime();
      }
    }

    setIsChecking(false);
  };

  return {
    puzzle,
    words,
    livesRemaining,
    updateGuess,
    checkAnswers,
    gameStatus,
    isChecking,
    shouldShake,
  };
}