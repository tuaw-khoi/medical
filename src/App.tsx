import About from "./component/About.tsx";
import Header from "./component/Header.tsx";
import Message from "./component/Message.tsx";
import Slides from "./component/Slides.tsx";

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
