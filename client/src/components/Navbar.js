import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="ui visible inverted left vertical sidebar menu">
      <Link to="/home" className="item" href="/#">
        <i className="home icon"></i>
        Home
      </Link>
      <Link to="/shipper" className="item" href="/#">
        <i className="block layout icon"></i>
        Shippers
      </Link>
      <Link to="/kibana" className="item" href="/#">
        <i className="smile icon"></i>
        Kibana
      </Link>
      <Link to="/kafka-Kowl" className="item" href="/#">
        <i className="calendar icon"></i>
        Kafka Kowl
      </Link>
      <Link to="/zooNavigator" className="item">
        <i className="calendar icon"></i>
        ZooNavigator
      </Link>
      <Link to="/Lodge-something" className="item">
        <i className="calendar icon"></i>
        Lodge-Something
      </Link>
    </div>
  );
};
export default Navbar;
