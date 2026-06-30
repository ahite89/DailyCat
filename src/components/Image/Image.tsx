import type { ImageProps } from "../../types/image";
import styles from "./Image.module.css";

export default function Image({ imageUrl }: ImageProps) {
    return (
        <img
            src={imageUrl}
            alt="Daily Cat puzzle"
            className={styles.puzzleImage}
        />
    );
};