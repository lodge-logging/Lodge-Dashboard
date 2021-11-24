import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import S3 from "./components/S3";
import Home from "./components/Home";
import IFrame from "./components/IFrame";

function App() {
  let kibanaLink =
    "http://localhost:5601/?auth_provider_hint=anonymous1#/elasticsearch/nodes?embed=true&_g=(....)";
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
            element={<Content children={<Home />} title="Shipper" />}
          />
          <Route
            path="/kibana"
            element={
              <Content
                children={
                  <Content
                    children={<IFrame srcLink={kibanaLink} />}
                    title="Kibana"
                  />
                }
              />
            }
          />
          <Route
            path="/kafak-Kowl"
            element={
              <Content
                children={
                  <Content
                    children={<IFrame srcLink={kibanaLink} />}
                    title="kafak-Kowl"
                  />
                }
              />
            }
          />
          <Route
            path="/Lodge-something"
            element={<Content children={<S3 />} title="Lodge-something" />}
          />
          <Route
            path="/zooNavigator"
            element={
              <Content
                children={
                  <Content
                    children={<IFrame srcLink={kibanaLink} />}
                    title="zooNavigator"
                  />
                }
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
