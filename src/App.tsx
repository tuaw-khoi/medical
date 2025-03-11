import About from "./component/about";
import Header from "./component/header";
import Message from "./component/message";
import Slides from "./component/slides";

function App() {
  return (
    <div>
      <Header />
      <Slides />
      <div className="relative">
        <About />
        <Message />
      </div>
    </div>
  );
}

export default App;
