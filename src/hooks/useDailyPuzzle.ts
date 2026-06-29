import { LAUNCH_DATE } from "../constants/constants";
import { puzzles } from "../data/puzzles";
import type { PuzzleProps } from "../types/puzzle";

export const useDailyPuzzle = (): PuzzleProps => {
    const today = new Date();

    const daysSinceLaunch = Math.floor(
        (today.getTime() - LAUNCH_DATE.getTime()) /
        (1000 * 60 * 60 * 24)
    );

    return puzzles[daysSinceLaunch * puzzles.length];
};