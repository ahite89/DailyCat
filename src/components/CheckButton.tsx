import type { CheckButtonProps } from "../types/checkButton";

export default function CheckButton({ checkAnswers, gameStatus }: CheckButtonProps) {
    return (
        <div>
            <button onClick={checkAnswers} disabled={gameStatus !== "playing"}>Check Answers</button>
        </div>
    );
};