import type { LivesProps } from "../../types/lives";
import { TOTAL_LIVES } from "../../constants/constants";
import styles from "./Lives.module.css";

export default function Lives({ livesRemaining }: LivesProps) {
    return (
    <section className={styles.container} aria-label="Lives remaining">
      <p className={styles.label}>Lives remaining:</p>

      <div className={styles.lives}>
        {Array.from({ length: TOTAL_LIVES }).map((_, index) => (
          <span key={index} className={styles.life}>
            {index < livesRemaining ? "🐱" : "⬜"}
          </span>
        ))}
      </div>
    </section>
  );
};