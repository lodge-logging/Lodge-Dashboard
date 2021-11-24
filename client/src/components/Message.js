const Message = ({ title, content }) => {
  return (
    <div className="ui info message">
      <i className="close icon"></i>
      <div className="header">{title}</div>
      <p>{content}</p>
    </div>
  );
};

export default Message;
