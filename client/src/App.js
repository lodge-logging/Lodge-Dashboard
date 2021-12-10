import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import S3 from "./components/S3";
import Home from "./components/Home";
import IFrame from "./components/IFrame";
import Shipper from "./components/Shipper";
import Documenation from "./components/Documentation";
import { useEffect, useState } from "react";

function App() {
  let [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      let res = await fetch("/data");
      let data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);

  let kibanaLink = `http://${data.kibanaHost}/?auth_provider_hint=anonymous1#/elasticsearch/nodes?embed=true&_g=(....)`;
  let zooNavigatorLink = `http://${data.hostIP}:8001/`;
  let kowlLink = `http://${data.hostIP}:8080/`;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar data={data} />
        <Routes>
          <Route path="/home" element={<Content children={<Home />} />} />
          <Route
            path="/shipper"
            element={
              <Content children={<Shipper />} title="Filebeat as a Shipper" />
            }
          />
          <Route
            path="/kibana"
            element={
              <Content
                children={
                  <Content
                    children={<IFrame srcLink={kibanaLink} title="kibana" />}
                    title="Kibana"
                    description="Kibana allows you to search, analyze, and visualize log data in real time."
                    url={`http://${data.kibanaHost}`}
                  />
                }
              />
            }
          />
          <Route
            path="/kafka-Kowl"
            element={
              <Content
                children={
                  <Content
                    children={<IFrame srcLink={kowlLink} title="Kowl" />}
                    title="kafka-Kowl"
                    description="Kafka Kowl allows you to do data exploration, consumer lag monitoring and provide Kafka topic insights."
                    url={kowlLink}
                  />
                }
              />
            }
          />
          <Route
            path="/Lodge-Restore"
            element={<Content children={<S3 />} title="Lodge-Restore" />}
          />
          <Route
            path="/zooNavigator"
            element={
              <Content
                children={
                  <Content
                    children={
                      <IFrame srcLink={zooNavigatorLink} title="zooNavigator" />
                    }
                    title="zooNavigator"
                    description="ZooNavigator provides you an effcient way to manage ZooKeeper nodes."
                    url={zooNavigatorLink}
                  />
                }
              />
            }
          />
          <Route
            path="/documentation"
            element={
              <Content children={<Documenation />} title="Documenation" />
            }
          />
          <Route path="/" element={<Content children={<Home />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
