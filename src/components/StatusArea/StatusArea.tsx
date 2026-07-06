import type { GameStatus } from "../../types/puzzle";
import Lives from "../Lives/Lives";
import styles from "./StatusArea.module.css";

type StatusAreaProps = {
  gameStatus: GameStatus;
  livesRemaining: number;
};

export default function StatusArea({
  gameStatus,
  livesRemaining,
}: StatusAreaProps) {
  const isComplete = gameStatus !== "playing";

  return (
    <section className={styles.container}>
      <div
        key={gameStatus}
        className={`${styles.content} ${
          isComplete ? styles.flipIn : ""
        }`}
      >
        {gameStatus === "playing" && (
          <Lives livesRemaining={livesRemaining} />
        )}

        {gameStatus === "won" && (
          <>
            <p className={styles.title}>Purrfect solve!</p>
            <p className={styles.subtitle}>Come back tomorrow for another daily dose of cat</p>
          </>
        )}

        {gameStatus === "lost" && (
          <>
            <p className={styles.title}>What a cat-tastrophe!</p>
            <p className={styles.subtitle}>Better luck tomorrow</p>
          </>
        )}
      </div>
    </section>
  );
}