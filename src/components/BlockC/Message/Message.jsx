const Message = ({ title, date, name, text }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{name}</p>
      <p>{text}</p>
    </div>
  );
};

export default Message;
