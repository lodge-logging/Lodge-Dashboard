const IFrame = ({ srcLink }) => {
  return (
    <iframe
      src={srcLink}
      // height="90vh"
      // width="80%"
      style={{ minHeight: "90vh", minWidth: "100%" }}
    ></iframe>
  );
};

export default IFrame;
