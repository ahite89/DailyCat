import type { HeaderProps } from "../types/header";

export default function Header({ puzzleNumber, date }: HeaderProps) {
    return (
        <header>
            <h1>Daily Cat #{puzzleNumber}</h1>
            <p>
                {date.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                })}
            </p>
        </header>
    );
};