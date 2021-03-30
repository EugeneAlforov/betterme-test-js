import s from "./Button.module.css";

const Button = ({ handleClick }) => {
  return <button className={s.button} onClick={handleClick}>GET MY PLAN</button>;
};

export default Button;
