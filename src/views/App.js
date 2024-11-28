import "./App.scss";
import Header from "../components/Header/Header";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container">

        </div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
      {/* <div>
        <div>
          <button><Link to="/users">Go to User page</Link></button>
          <button><Link to="/admins">Go to Admin page</Link></button>
        </div>
        Ninh Đình Vinh
      </div> */}
    </div>
  );
}

export default App;
