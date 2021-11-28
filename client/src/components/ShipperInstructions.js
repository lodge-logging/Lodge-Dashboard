import { Step1Content, Step2Content } from "./Step";
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate
        sed sapien a hendrerit. Praesent congue, est in tincidunt posuere, neque
        nunc posuere felis, non placerat nunc dolor ut est. Etiam ac faucibus
        felis. Sed venenatis pharetra nulla, a rutrum sapien luctus non. Donec
        elementum scelerisque elit. Integer ex mauris, volutpat commodo purus a,
        tincidunt rutrum sapien. Vivamus sit amet euismod enim, id euismod
        massa. Nulla ac varius nisi.
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
      />
      <Step number="4" color="green" title="Start Filebeat" />
    </div>
  );
};

export default ShipperInstructions;
