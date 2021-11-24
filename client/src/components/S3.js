import { useState } from "react";
import axios from "axios";
import DateInput from "./DateInput";

const S3 = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const onClickHandler = async (e) => {
    e.preventDefault();
    const dates = { startDate, endDate };
    console.log("start", startDate);
    console.log("end", endDate);
    const response = await axios({
      method: "post",
      url: "http://localhost:5000/s3",
      data: dates,
    });
    console.log("response from s3:", response.data);
  };

  return (
    <form className="ui form">
      <div className="field">
        <label>Start Date</label>
        <div className="field">
          <DateInput setDate={setStartDate} />
        </div>
        <label>End Date</label>
        <div className="field">
          <DateInput setDate={setEndDate} />
        </div>
      </div>
      <button className="ui button" type="submit" onClick={onClickHandler}>
        Retrieve
      </button>
    </form>
  );
};

export default S3;
