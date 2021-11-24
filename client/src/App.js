import Navbar from "./components/Navbar";
import Content from "./components/Content";
import S3 from "./components/S3";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Content title="S3">
        <iframe
          src="http://localhost:5601/?auth_provider_hint=anonymous1#/elasticsearch/nodes?embed=true&_g=(....)"
          height="100%"
          width="auto"
        ></iframe>
      </Content>
    </div>
  );
}

export default App;
