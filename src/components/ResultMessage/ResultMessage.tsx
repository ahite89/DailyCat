import type { ResultMessageProps } from "../../types/resultMessage";

export default function ResultMessage({ title, message }: ResultMessageProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
}