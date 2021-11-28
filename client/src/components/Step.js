import { useState } from "react";
import axios from "axios";

const Step = ({ number, title, content, color }) => {
  return (
    <div class="ui raised segment">
      <div class={`ui ${color} ribbon label`}>Step{number}</div>
      <span>{title}</span>
      {content}
    </div>
  );
};

export const Step1Content = () => {
  return (
    <>
      <p>
        let step1Content = `Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Ut vulputate sed sapien a hendrerit. Praesent congue, est in
        tincidunt posuere, neque nunc posuere felis, non placerat nunc dolor ut
        est.
        <a href="https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-installation-configuration.html#installation">
          Install filebeat
        </a>
      </p>
    </>
  );
};

export const Step2Content = ({ choices }) => {
  const [module, setModule] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("current module");
    console.log(module);
    const response = await axios({
      method: "post",
      url: "http://localhost:5000/download",
      data: { module },
    });
    console.log("response from s3:", response.data);
  };
  return (
    <>
      <p>
        let step1Content = `Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Ut vulputate sed sapien a hendrerit.
      </p>
      <form className="ui form">
        <div className="field">
          <select
            className="ui dropdown"
            onChange={(e) => setModule(e.target.value)}
          >
            <option value="">Module</option>
            {choices.map((choice, index) => {
              return (
                <option key={index} value={choice}>
                  {choice}
                </option>
              );
            })}
          </select>
        </div>
        <button className="ui button" type="submit" onClick={handleClick}>
          Download
        </button>
      </form>
    </>
  );
};

export default Step;
