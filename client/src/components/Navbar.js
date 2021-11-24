const Navbar = () => {
  return (
    <>
      <div className="ui visible inverted left vertical sidebar menu">
        <a className="item" href="/#">
          <i className="home icon"></i>
          Home
        </a>
        <a className="item" href="/#">
          <i className="block layout icon"></i>
          Shippers
        </a>
        <a className="item" href="/#">
          <i className="smile icon"></i>
          Kibana
        </a>
        <a className="item" href="/#">
          <i className="calendar icon"></i>
          Kafka Kowl
        </a>
        <a className="item" href="/#">
          <i className="calendar icon"></i>
          ZooNavigator
        </a>
        <a className="item" href="/#">
          <i className="calendar icon"></i>
          Lodge-something
        </a>
      </div>
    </>
  );
};

export default Navbar;
