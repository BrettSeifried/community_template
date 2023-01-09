import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";

function App() {
  return (
    <div className="mainApp">
      <Header />
      <Body />
      <About />
    </div>
  );
}

export default App;
