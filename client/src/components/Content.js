const Content = ({ children, title }) => {
  return (
    <div className="pusher">
      <div
        className="ui basic segment"
        style={{ minHeight: "100vh", marginRight: "20em" }}
      >
        <h3 className="ui header">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Content;
