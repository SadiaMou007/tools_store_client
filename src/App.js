import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Authentication/Login";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import NavBar from "./Pages/Shared/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
