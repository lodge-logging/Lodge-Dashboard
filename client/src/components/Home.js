const Home = () => {
  return (
    <>
      <div className="ui fluid center aligned container">
        <div class="ui hidden divider"></div>
        <div class="ui hidden divider"></div>
        <div class="ui hidden divider"></div>
        <div class="ui hidden divider"></div>
        <div class="ui hidden divider"></div>
        <div class="ui basic segment">
          <img
            className="ui medium spaced image"
            src={process.env.PUBLIC_URL + "/4verbs-bold-removebg.png"}
            alt="lodge-elk-high-level"
          />
          <img
            className="ui large spaced image"
            src={process.env.PUBLIC_URL + "/4-verbs-diagram-dashboard.png"}
            alt="lodge-elk-high-level"
          />
        </div>
      </div>
      <div class="ui hidden divider"></div>
      <div class="ui hidden divider"></div>
      <div class="ui hidden divider"></div>
      <div class="ui hidden divider"></div>
      <div class="ui hidden divider"></div>
      <div class="ui hidden divider"></div>
      <div class="ui hidden divider"></div>
      <div class="ui hidden divider"></div>
      <div className="ui fluid center aligned container">
        <h4>
          Welcome to Lodge - your end-to-end log data pipeline. Check out our
          documentation to get started.
        </h4>
        <button className="ui teal button">Lodge Documentation</button>
      </div>
    </>
  );
};

export default Home;
