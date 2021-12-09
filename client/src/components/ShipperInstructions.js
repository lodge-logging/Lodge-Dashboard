import { Step1Content, Step2Content, Step3Content, Step4Content } from "./Step";
import Step from "./Step";
import { useState, useEffect } from "react";
import axios from "axios";

const ShipperInstructions = () => {
  let [modules, setModules] = useState([]);
  useEffect(() => {
    async function getModules() {
      let response = await axios.get("/filebeatModules");
      setModules(response.data.modules);
    }
    getModules();
  }, []);
  return (
    <>
      <p>
        Lodge uses Filebeat to collect and ship logs. Please follow the
        instructions below to begin shipping logs to Lodge.
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
        title="Select a Module and Download the yaml file"
        content={<Step2Content choices={modules} />}
      />
      <Step
        number="3"
        color="yellow"
        title="Move the configuration file downloaded to the Filebeat folder"
        content={<Step3Content />}
      />
      <Step
        number="4"
        color="green"
        title="Start Filebeat"
        content={<Step4Content />}
      />
    </>
  );
};

export default ShipperInstructions;
