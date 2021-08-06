import "./App.css";
import Titlebar from "./components/titlebar/Titlebar";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Titlebar />
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
