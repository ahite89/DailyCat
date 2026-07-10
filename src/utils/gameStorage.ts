import type { SavedGame } from "../types/gameState";
import { STORAGE_KEY } from "../constants/constants";

export function saveGame(game: SavedGame) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(game));
}

export function loadGame(): SavedGame | null {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return null;
  }

  try {
    return JSON.parse(saved) as SavedGame;
  } catch {
    return null;
  }
}