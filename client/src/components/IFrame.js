const IFrame = ({ srcLink, title }) => {
  return (
    <iframe
      src={srcLink}
      title={title}
      //height="90vh"
      //width="80%"
      style={{ minHeight: "90vh", minWidth: "100%" }}
    ></iframe>
  );
};

export default IFrame;
