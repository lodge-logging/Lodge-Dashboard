import React, { useState } from "react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

const DateInput = ({ setDate }) => {
  const [currentDate, setNewDate] = useState(null);
  const onChange = (event, data) => {
    setNewDate(data.value);
    setDate(data.value);
  };

  return <SemanticDatepicker onChange={onChange} />;
};

export default DateInput;
