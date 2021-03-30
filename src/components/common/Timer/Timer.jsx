import s from "./Timer.module.css";

const Timer = ({ dates }) => {
  return (
    <div className={s.container}>
      <p className={s.time}>
        {dates[0]} {dates[1]}
      </p>
      <p className={s.minSecs}>Minutes Seconds</p>
    </div>
  );
};

export default Timer;
