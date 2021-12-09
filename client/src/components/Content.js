const Content = ({ children, title, description, url }) => {
  return (
    <div className="pusher">
      <div
        className="ui basic segment"
        // style={{ minHeight: "100vh", marginRight: "20em" }}
        style={{ marginRight: "10em" }}
      >
        <h3 className="ui header">{title}</h3>
        <p>
          <i>{description}</i>
          {url ? (
            <a href={url} target="_blank">
              {title}
            </a>
          ) : null}
        </p>
        {children}
      </div>
    </div>
  );
};

export default Content;
