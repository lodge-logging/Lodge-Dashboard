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
  return (
    <>
      <p>
        let step1Content = `Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Ut vulputate sed sapien a hendrerit.
      </p>
      <form class="ui form">
        <div class="field">
          <select class="ui dropdown">
            <option value="">Module</option>
            {choices.map((choice, index) => {
              return (
                <option key={index} value={index}>
                  {choice}
                </option>
              );
            })}
          </select>
        </div>
        <button className="ui button" type="submit">
          Download
        </button>
      </form>
    </>
  );
};

export default Step;
