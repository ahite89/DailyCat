import type { SentenceProps } from "../types/sentence";
import Word from "./Word";

export default function Sentence({ words }: SentenceProps) {
    return (
        <div>
            <p>My cat is...</p>
            {words.map((word) => (
                <Word key={word.id} id={word.id} answer={word.answer} hidden={word.hidden} />
            ))}
        </div>
    );
};