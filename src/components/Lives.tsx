import type { LivesProps } from "../types/lives";

export default function Lives({ livesRemaining }: LivesProps) {
    return (
        <div>
            <p>Lives remaining: {livesRemaining}</p>
        </div>
    );
};