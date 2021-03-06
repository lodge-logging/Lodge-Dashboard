import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const filebeatLocationCodeStr = "/etc/filebeat/filebeat.yml";
const filebeatInstallURL =
  "https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-installation-configuration.html#installation";
const filebeatStartURL =
  "https://www.elastic.co/guide/en/beats/filebeat/master/filebeat-starting.html";

const Step = ({ number, title, content, color }) => {
  return (
    <div className="ui raised segment">
      <div className={`ui ${color} ribbon label`}>Step{number}</div>
      <span>
        <strong>{title}</strong>
      </span>
      {content}
    </div>
  );
};

export const Step1Content = () => {
  return (
    <>
      <p>
        If you don't have filebeat already installed, start with installing
        <a href={filebeatInstallURL} target="_blank" rel="noreferrer">
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
        Configure Filebeat by selecting a module to download, we currently
        support Nginx, MongoDB, PostgreSQL, etc..
      </p>
      <p>
        <i>
          Note: If your logtype is not available, you will need to manually
          configure Filebeat as well as add the appropriate grok pattern to
          Logstash.
        </i>
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
          href={`/download?module=${module}`}
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
      <SyntaxHighlighter language="yaml">
        {filebeatLocationCodeStr}
      </SyntaxHighlighter>
    </>
  );
};

export const Step4Content = () => {
  return (
    <>
      <p>Start or restart Filebeat.</p>
      <p>
        <i>
          Check the &nbsp;
          <a href={filebeatStartURL} target="_blank" rel="noreferrer">
            Filebeat documentation
          </a>
          &nbsp;for the specific command to start Filebeat based on your
          operating system.
        </i>
      </p>
    </>
  );
};

export default Step;
