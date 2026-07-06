import { useState } from "react";
import { useDailyPuzzle } from "./useDailyPuzzle";
import { createGameWords } from "../utils/createGameWords";
import { TOTAL_LIVES } from "../constants/constants";
import type { GameStatus } from "../types/puzzle";

const sleep = (ms: number) =>
  new Promise((resolve) => window.setTimeout(resolve, ms));

export function usePuzzle() {
  const puzzle = useDailyPuzzle();

  const [words, setWords] = useState(createGameWords(puzzle.words));
  const [livesRemaining, setLivesRemaining] = useState(TOTAL_LIVES);
  const [isChecking, setIsChecking] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);
  const [tightenSentence, setTightenSentence] = useState(false);
  const [displayStatus, setDisplayStatus] = useState<GameStatus>("playing");

  const gameStatus: GameStatus =
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

  const revealCorrectWord = async (wordId: number) => {
    setWords((currentWords) =>
      currentWords.map((word) =>
        word.id === wordId
          ? {
              ...word,
              guess: word.answer,
              solved: true,
              status: "flipping",
            }
          : word
      )
    );

    await sleep(320);

    setWords((currentWords) =>
      currentWords.map((word) =>
        word.id === wordId
          ? {
              ...word,
              status: "correct",
            }
          : word
      )
    );

    await sleep(150);
  };

  const revealRemainingAnswers = async () => {
    setIsChecking(true);

    const unsolvedWords = words.filter(
      (word) => word.guessable && !word.solved
    );

    for (const word of unsolvedWords) {
      await revealCorrectWord(word.id);
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
    setTightenSentence(false);

    if (hasIncorrectGuess) {
      setShouldShake(true);
      await sleep(360);
      setShouldShake(false);
      await sleep(200);
    }

    for (const word of wordsToCheck) {
      const isCorrect =
        word.guess.trim().toLowerCase() === word.answer.toLowerCase();

      if (isCorrect) {
        await revealCorrectWord(word.id);
      } 
      else {
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
      await sleep(220);
      const nextLives = Math.max(livesRemaining - 1, 0);
      setLivesRemaining(nextLives);

      if (nextLives === 0) {
        await revealRemainingAnswers();
        await sleep(350);
        setTightenSentence(true);
        await sleep(450);
        setDisplayStatus("lost");
      }
    }
    else {
      await sleep(350);
      setTightenSentence(true);
      await sleep(450);
      setDisplayStatus("won");
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
    displayStatus,
    isChecking,
    shouldShake,
    tightenSentence,
  };
}