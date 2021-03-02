import './App.css';
import Projects from "./components/Projects"
import Navbar from "./components/Navbar"
import Greeting from "./components/Greeting"
import Knowledge from "./components/Knowledge"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting />
      <Knowledge />
      <Projects />
      {/* <div id="home"></div> */}
    </div>
  );
}

export default App;
