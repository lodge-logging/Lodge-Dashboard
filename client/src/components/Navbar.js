import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ data }) => {
  const [activeItem, setActiveItem] = useState("");
  const handleClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="ui inverted visible left vertical sidebar menu">
      <div className="item">
        <img
          className="ui small image"
          src={process.env.PUBLIC_URL + "/lodge-5.svg"}
          alt="lodge-logo"
        />
      </div>

      <Link
        to="/home"
        className={`blue item ${activeItem === "home" ? "active" : ""}`}
        onClick={() => handleClick("home")}
      >
        <img
          className="ui mini right spaced image"
          src={process.env.PUBLIC_URL + "/images/home.png"}
          alt="white-home-ugly"
        />
        Home
      </Link>
      <Link
        to="/shipper"
        className={`olive item ${activeItem === "shipper" ? "active" : ""}`}
        onClick={() => handleClick("shipper")}
      >
        <img
          className="ui mini right spaced image"
          src={process.env.PUBLIC_URL + "/images/beats.png"}
          alt="lodge-filebeat"
        />
        Shippers
      </Link>
      <Link
        to="/kafka-Kowl"
        className={`blue item ${activeItem === "kafka-Kowl" ? "active" : ""}`}
        onClick={() => handleClick("kafka-Kowl")}
      >
        <img
          className="ui mini right spaced image"
          src={process.env.PUBLIC_URL + "/images/kowl.png"}
          alt="kafka-kowl"
        />
        Kafka Kowl
      </Link>
      {/* <Link
        to="/zooNavigator"
        className={`olive item ${
          activeItem === "zooNavigator" ? "active" : ""
        }`}
        onClick={() => handleClick("zooNavigator")}
      >
        <img
          className="ui mini right spaced image"
          src={process.env.PUBLIC_URL + "/images/zoonav.png"}
          alt="zoonavigator"
        />
        ZooNavigator
      </Link> */}
      <a
        href={`http://${data.hostIP}:8001/`}
        className={`olive item ${
          activeItem === "zooNavigator" ? "active" : ""
        }`}
        target="_blank"
        rel="noreferrer"
        onClick={() => handleClick("zooNavigator")}
      >
        <img
          className="ui mini right spaced image"
          src={process.env.PUBLIC_URL + "/images/zoonav.png"}
          alt="zoonavigator"
        />
        ZooNavigator
      </a>
      <Link
        to="/Lodge-Restore"
        className={`blue item ${
          activeItem === "lodge-Restore" ? "active" : ""
        }`}
        onClick={() => handleClick("lodge-Restore")}
      >
        <img
          className="ui mini right spaced image"
          src={process.env.PUBLIC_URL + "/images/lodge-restore.png"}
          alt="lodge-restore"
        />
        Lodge-Restore
      </Link>
      <Link
        to="/kibana"
        className={`olive item ${activeItem === "kibana" ? "active" : ""}`}
        onClick={() => handleClick("kibana")}
      >
        <img
          className="ui mini right spaced image"
          src={process.env.PUBLIC_URL + "/images/kibana.png"}
          alt="lodge-kibana"
        />
        Kibana
      </Link>
      <Link
        to="/documentation"
        className={`olive item ${
          activeItem === "documentation" ? "active" : ""
        }`}
        onClick={() => handleClick("documentation")}
      >
        <img
          className="ui mini right spaced image"
          src={process.env.PUBLIC_URL + "/images/docs.png"}
          alt="lodge-documentation"
        />
        Documentation
      </Link>
    </div>
  );
};

export default Navbar;
