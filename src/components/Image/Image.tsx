import styles from "./Image.module.css";

type ImageProps = {
    imageUrl: string;
};

export default function Image({ imageUrl }: ImageProps) {
    return (
        <img
            src={imageUrl}
            alt="Daily Cat puzzle"
            className={styles.puzzleImage}
        />
    );
};