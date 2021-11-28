import { useState } from "react";

const Step = ({ number, title, content, color }) => {
  return (
    <div className="ui raised segment">
      <div className={`ui ${color} ribbon label`}>Step{number}</div>
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
            defaultValue=""
          >
            <option value="" disabled hidden>
              Select a module
            </option>
            {choices.map((choice, index) => {
              return (
                <option key={index} value={choice}>
                  {choice}
                </option>
              );
            })}
          </select>
        </div>
        <a
          className={`ui button ${module ? "" : "disabled"}`}
          href={`http://localhost:5000/download?module=${module}`}
        >
          Download
        </a>
      </form>
    </>
  );
};

export default Step;
