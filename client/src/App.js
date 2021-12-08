import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import S3 from "./components/S3";
import Home from "./components/Home";
import IFrame from "./components/IFrame";
import Shipper from "./components/Shipper";
import { data } from "./data.json";

function App() {
  let kibanaLink = `http://${data.kibanaHost}/?auth_provider_hint=anonymous1#/elasticsearch/nodes?embed=true&_g=(....)`;
  let zooNavigatorLink = "http://localhost:8001/";
  let kowlLink = "http://localhost:8080/";
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/home"
            element={<Content children={<Home />} title="Home" />}
          />
          <Route
            path="/shipper"
            element={
              <Content
                children={<Shipper shipperName="Filebeat" />}
                title="Filebeat Shipper"
              />
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
                  />
                }
              />
            }
          />
          <Route
            path="/"
            element={<Content children={<Home />} title="Home" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
