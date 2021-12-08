import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const filebeatLocationCodeStr = "/etc/filebeat/filebeat.yml";

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
        If you don't have filebeat already installed, start with installing
        <a href="https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-installation-configuration.html#installation">
          &nbsp;Filebeat 7.15
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
        Configure Filebeat by selecting a module to support, we are supporting
        nginx, mongodb, postgres etc..
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

export const Step3Content = () => {
  return (
    <>
      {/* <p>
        Move your configuration file to <code>/etc/filebeat/filebeat.yml.</code>
      </p> */}

      <p>Move your configuration file to:</p>
      <SyntaxHighlighter language="yaml">
        {filebeatLocationCodeStr}
      </SyntaxHighlighter>
    </>
  );
};

export const Step4Content = () => {
  return (
    <>
      <p>
        <a href="https://www.elastic.co/guide/en/beats/filebeat/master/filebeat-starting.html">
          Start or restart
        </a>
        &nbsp;Filebeat.
      </p>
    </>
  );
};

export default Step;
