const Message = ({ title, content, setShowMessage }) => {
  const handleClick = () => {
    setShowMessage(false);
  };
  return (
    <div className="ui info message">
      <i className="close icon" onClick={handleClick}></i>
      <div className="header">{title}</div>
      <p>{content}</p>
    </div>
  );
};

export default Message;
