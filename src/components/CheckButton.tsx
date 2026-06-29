import type { CheckButtonProps } from "../types/checkButton";

export default function CheckButton({ checkAnswers }: CheckButtonProps) {
    return (
        <div>
            <button onClick={checkAnswers}>Check Answers</button>
        </div>
    );
};