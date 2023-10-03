import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Pages/Home";
import Registration from "./component/Pages/Registration";
import Login from "./component/Pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="registration" element={<Registration />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
