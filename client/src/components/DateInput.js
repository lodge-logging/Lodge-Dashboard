import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

const DateInput = ({ setDate }) => {
  const onChange = (event, data) => {
    setDate(data.value);
  };

  return <SemanticDatepicker onChange={onChange} />;
};

export default DateInput;
