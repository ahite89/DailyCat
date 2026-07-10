import type { GameStatus, GameWord } from "../types/puzzle";

export type SavedGame = {
  puzzleId: number;
  words: GameWord[];
  livesRemaining: number;
  displayStatus: GameStatus;
};