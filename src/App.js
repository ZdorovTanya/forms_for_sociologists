import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Pages/Home";
import Registration from "./component/Pages/Registration/Registration";
import Login from "./component/Pages/Login/Login";
import User from "./component/Pages/Account/User";
import SignInSignUp from "./component/Pages/SignInSignUp/SignInSignUp";

function App() {
  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="signInUp" element={<SignInSignUp/>}></Route>
          {/* <Route path="registration" element={<Registration />}></Route> */}
          {/* <Route path="login" element={<Login />}></Route> */}
          <Route path="form" element={<Login />}></Route>
          <Route path="user" element={<User />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
