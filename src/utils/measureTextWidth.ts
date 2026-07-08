import { SENTENCE_FONT } from "../constants/constants";

export function measureTextWidth(text: string): number {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) return text.length * 12;

  context.font = SENTENCE_FONT;

  return context.measureText(text).width;
}