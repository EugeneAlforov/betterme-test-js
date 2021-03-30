import s from "./Message.module.css";

const Message = ({ title, date, name, text }) => {
  return (
    <div className={s.container}>
      <div className={s.subcontainer}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.dateContainer}>
          <p className={s.date}>{date}</p>
          <p className={s.name}>{name}</p>
        </div>
      </div>
      <div className={s.textContainer}>
        <p className={s.text}>{text}</p>
      </div>
    </div>
  );
};

export default Message;
