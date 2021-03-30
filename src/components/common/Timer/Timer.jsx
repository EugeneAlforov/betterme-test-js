import s from "./Timer.module.css";

const Timer = ({ dates, withoutText }) => {
  return (
    <div className={s.container}>
      <p className={s.time}>
        {dates && dates[0]} {dates[1]}
      </p>
      {!withoutText && <p className={s.minSecs}>Minutes Seconds</p>}
    </div>
  );
};

export default Timer;
