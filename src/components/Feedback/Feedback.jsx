import css from './Feedback.module.css';

export default function Feedback({ feedback }) {
  return (
    <div className={css.feedback}>
      <p className={css.text}>Good: </p>
      <p className={css.text}>Neutral: </p>
      <p className={css.text}>Bad: </p>
      <p className={css.text}>Total: </p>
      <p className={css.text}>Positive feedback: %</p>
    </div>
  );
}
