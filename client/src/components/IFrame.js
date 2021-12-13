const IFrame = ({ srcLink, title }) => {
  return (
    <iframe
      src={srcLink}
      title={title}
      style={{ minHeight: "90vh", minWidth: "100%" }}
    ></iframe>
  );
};

export default IFrame;
