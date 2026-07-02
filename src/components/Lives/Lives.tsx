import type { LivesProps } from "../../types/lives";
import CatIcon from "../CatIcon/CatIcon";
import { TOTAL_LIVES } from "../../constants/constants";
import styles from "./Lives.module.css";

export default function Lives({ livesRemaining }: LivesProps) {
  return (
    <section className={styles.container} aria-label="Lives remaining">
      <p className={styles.label}>Lives remaining:</p>

      <div className={styles.lives}>
        {Array.from({ length: TOTAL_LIVES }).map((_, index) => (
          <CatIcon key={index} 
            className={
              index < livesRemaining
                ? styles.life
                : styles.lifeLost
            }
          />
        ))}
      </div>
    </section>
  );
};