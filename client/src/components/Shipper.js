//import { useState } from "react";
import ShipperInstructions from "./ShipperInstructions";

const Shipper = ({ shipperName }) => {
  // const [activeItem, setActiveItem] = useState("tab1");
  // function onClickHandler(tabName) {
  //   setActiveItem(tabName);
  // }
  return (
    <>
      {/* <div className="ui tabular menu">
        <button
          className={`${activeItem === "tab1" ? "active" : ""} item`}
          onClick={() => onClickHandler("tab1")}
        >
          {shipperName} for Linux
        </button>
        <button
          className={`${activeItem === "tab2" ? "active" : ""} item`}
          onClick={() => onClickHandler("tab2")}
        >
          {shipperName} for Windows
        </button>
      </div>
      {activeItem === "tab1" ? (
        <ShipperInstructions os="Mac and Linux" />
      ) : (
        <ShipperInstructions os="Windows" />
      )} */}

      <ShipperInstructions />
    </>
  );
};

export default Shipper;
