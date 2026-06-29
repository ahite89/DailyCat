import type { SentenceProps } from "../types/sentence";

export default function Sentence({ words }: SentenceProps) {
    return (
        <div>
            <p>My cat is...</p>
            {words.map((word) => (
                <p key={word.id}>{word.answer}</p>
            ))}
        </div>
    );
};