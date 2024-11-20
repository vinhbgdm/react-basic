import logo from "./logo.svg";
import "./App.scss";
import MyCompoent from "../MyComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyCompoent/>
      </header>
    </div>
  );
}

export default App;
