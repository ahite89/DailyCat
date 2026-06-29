import type { GuessProps, WordProps } from "../types/sentence";

export function createGameWords(
  words: WordProps[]
): GuessProps[] {
  return words.map((word) => ({
    ...word,
    guess: "",
    solved: !word.hidden,
  }));
}