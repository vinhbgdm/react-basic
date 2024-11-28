import "./App.scss";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div>
        <div>
          <button><Link to="/users">Go to User page</Link></button>
          <button><Link to="/admins">Go to Admin page</Link></button>
        </div>
        Ninh Đình Vinh
      </div>
      
      {/* <header className="App-header">
        <Header />
        <div>
          <button><Link to="/users">User link</Link></button>
          <button><Link to="/admins">Admin link</Link></button>
        </div>
        Ninh Đình Vinh
      </header> */}
    </div>
  );
}

export default App;
