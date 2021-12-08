import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");
  const handleClick = (itemName) => {
    setActiveItem(itemName);
    console.log(itemName);
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
        {/* <i className="home icon"></i> */}
        <img
          className="ui mini right spaced image"
          src={process.env.PUBLIC_URL + "/white-home-ugly.png"}
          alt="white-home-ugly"
        />
        Home
      </Link>
      <Link
        to="/shipper"
        className={`olive item ${activeItem === "shipper" ? "active" : ""}`}
        onClick={() => handleClick("shipper")}
      >
        {/* <i className="block layout icon"></i> */}
        <img
          className="ui mini right spaced image"
          src={process.env.PUBLIC_URL + "/beats.png"}
          alt="lodge-filebeat"
        />
        Shippers
      </Link>
      <Link
        to="/kafka-Kowl"
        className={`blue item ${activeItem === "kafka-Kowl" ? "active" : ""}`}
        onClick={() => handleClick("kafka-Kowl")}
      >
        {/* <i className="calendar icon"></i> */}
        <img
          className="ui mini right spaced image"
          src={process.env.PUBLIC_URL + "/kowl.png"}
          alt="kafka-kowl"
        />
        Kafka Kowl
      </Link>
      <Link
        to="/zooNavigator"
        className={`olive item ${
          activeItem === "zooNavigator" ? "active" : ""
        }`}
        onClick={() => handleClick("zooNavigator")}
      >
        {/* <i className="calendar icon"></i> */}
        <img
          className="ui mini right spaced image"
          src={process.env.PUBLIC_URL + "/zoonavigator.png"}
          alt="zoonavigator"
        />
        ZooNavigator
      </Link>
      <Link
        to="/Lodge-Restore"
        className={`blue item ${
          activeItem === "lodge-Restore" ? "active" : ""
        }`}
        onClick={() => handleClick("lodge-Restore")}
      >
        {/* <i className="calendar icon"></i> */}
        <img
          className="ui mini right spaced image"
          src={process.env.PUBLIC_URL + "/lodge-restore-wr.png"}
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
          src={
            process.env.PUBLIC_URL + "/elastic-kibana-logo-png-transparent.png"
          }
          alt="lodge-kibana"
        />
        {/* <i className=" icon"></i> */}
        Kibana
      </Link>

      {/* do we want to copy tapestry and add another tab for docs ? */}
    </div>
  );
};

export default Navbar;
