import { useState } from "react";
import axios from "axios";
import DateInput from "./DateInput";
import Message from "./Message";

const S3 = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [retrievedFileKeys, setRetrievedFileFileKeys] = useState([]);

  const onClickHandler = async (e) => {
    e.preventDefault();
    const dates = { startDate, endDate };
    const response = await axios({
      method: "post",
      url: "http://localhost:5000/s3",
      data: dates,
    });
    console.log("response from s3:", response.data);
    if (response.status === 200) {
      setShowMessage(true);
      setMessage(response.data.message);
      setRetrievedFileFileKeys(response.data.retrievedFile);
    } else {
      setShowMessage(false);
    }
  };

  return (
    <>
      {showMessage ? (
        <Message
          title="Success"
          content={message}
          setShowMessage={setShowMessage}
        />
      ) : null}
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
      {retrievedFileKeys.length > 0 ? (
        <div className="ui middle aligned divided list">
          {retrievedFileKeys.map((fileKey, index) => {
            return (
              <div className="item" key={index}>
                <div className="right floated content">
                  <a href={`http://localhost:5000/s3?filekey=${fileKey}`}>
                    <i className="download icon"></i>
                  </a>
                </div>
                <i className="file alternate icon"></i>
                <div className="content">{fileKey}</div>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default S3;
