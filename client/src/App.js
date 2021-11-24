import Navbar from "./components/Navbar";
import Content from "./components/Content";
import S3 from "./components/S3";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Content title="S3">
        <S3 />
      </Content>
    </div>
  );
}

export default App;
