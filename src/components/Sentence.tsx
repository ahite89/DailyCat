import type { SentenceProps } from "../types/sentence";
import Word from "./Word";

export default function Sentence({ words, onGuessChange }: SentenceProps) {
    return (
        <section>
            <p>My cat is...</p>
            <div className="sentence-words">
                {words.map((word) => (
                    <Word 
                        key={word.id} 
                        {...word}
                        onGuessChange={onGuessChange}
                    />
                ))}
            </div>
        </section>
    );
};