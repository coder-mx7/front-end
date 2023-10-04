import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/login";
import Homepages from "./pages/website/homepages";
import Register from "./components/auth/register";
import User from "./pages/dashbored/user";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Homepages />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
    </div>
  );
}

export default App;
