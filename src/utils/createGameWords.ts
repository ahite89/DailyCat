import type { GameWord, PuzzleWord } from "../types/puzzle";
import { measureTextWidth } from "./measureTextWidth";

export function createGameWords(
  words: PuzzleWord[]
): GameWord[] {
  return words.map((word) => ({
    ...word,
    guess: "",
    solved: !word.guessable,
    status: "idle",
    textWidth: measureTextWidth(word.answer),
  }));
}