import type { GameWord, PuzzleWord } from "../types/puzzle";

export function createGameWords(
  words: PuzzleWord[]
): GameWord[] {
  return words.map((word) => ({
    ...word,
    guess: "",
    solved: !word.guessable,
  }));
}