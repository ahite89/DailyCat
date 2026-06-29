import type { WordProps } from "../types/sentence";

export default function Word({ answer, hidden }: WordProps) {
    if (!hidden) {
        return <span>{answer}</span>;
    }

    return (
        <input />
    );
};