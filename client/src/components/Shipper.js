import ShipperInstructions from "./ShipperInstructions";

const Shipper = () => {
  return (
    <div
      className="ui basic segment"
      style={{ minHeight: "90vh", minWidth: "100%" }}
    >
      <ShipperInstructions />
    </div>
  );
};

export default Shipper;
