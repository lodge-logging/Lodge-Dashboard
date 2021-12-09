const Documenation = () => {
  return (
    <>
      <div className="ui basic segment">
        <h2 className="ui header">Overview</h2>
        <div className="ui segment">
          <p>
            Thank you for using Lodge. This dashboard gathers a series of open
            source tools to allow you to generate configuration files for
            shipping logs to your stack, manage all of its component clusters,
            and restore archived logs in one place.
            <p>
              To start shipping logs to your stack, please click the Shippers
              tab on the left and follow the instructions. To manage the
              component clusters of your stack, you have ZooNavigator, Kowl, and
              Kibana for Zookeeper, Kafka, and Elasticsearch, respectively.
              Lastly, for re-indexing data from S3 archive back into
              Elasticsearch, you have Lodge-Restore. For more information on
              using these open source tools, please see the documentation links
              in the Resources section below.
            </p>
          </p>
        </div>
        <img
          className="ui massive right spaced image"
          src={process.env.PUBLIC_URL + "/lodge-elk.png"}
          alt="lodge-elk-high-level"
        />
      </div>
    </>
  );
};

export default Documenation;
