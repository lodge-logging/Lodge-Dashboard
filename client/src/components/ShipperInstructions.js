import { Step1Content, Step2Content, Step3Content, Step4Content } from "./Step";
import Step from "./Step";
import { useState, useEffect } from "react";
import axios from "axios";

const ShipperInstructions = () => {
  let [modules, setModules] = useState([]);
  useEffect(() => {
    async function getModules() {
      let response = await axios.get("http://localhost:5000/filebeatModules");
      setModules(response.data.modules);
    }
    getModules();
  }, []);
  return (
    <div className="ui segment">
      <div></div>
      <p>
        Filebeat is one of the easiest way to get logs from your system. Lodge
        supports multiple modules and makes it simple to configure Filebeat.
      </p>
      <Step
        number="1"
        color="red"
        title="Install Filebeat"
        content={<Step1Content />}
      />
      <Step
        number="2"
        color="blue"
        title="Pick a Module and Download yml file"
        content={<Step2Content choices={modules} />}
      />
      <Step
        number="3"
        color="yellow"
        title="Move the configuration file to the Filebeat folder"
        content={<Step3Content />}
      />
      <Step
        number="4"
        color="green"
        title="Start Filebeat"
        content={<Step4Content />}
      />
    </div>
  );
};

export default ShipperInstructions;
