const Content = ({ children, title, description, url }) => {
  return (
    <div className="pusher" style={{ marginRight: "18em" }}>
      <div className="ui basic segment">
        <h3 className="ui header">{title}</h3>
        <p>
          <i>{description}</i>
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
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
