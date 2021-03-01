import './App.css';
import Projects from "./components/Projects"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Projects />
      {/* <div id="home"></div> */}
    </div>
  );
}

export default App;
