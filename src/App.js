import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./Pages/Authentication/Login";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import Purchase from "./Pages/Purchase/Purchase";
import NavBar from "./Pages/Shared/NavBar";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import SignUp from "./Pages/Authentication/SignUp";
import NotFoundPage from "./Pages/Shared/NotFoundPage";
import Footer from "./Pages/Shared/Footer";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Dashboard/Profile";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import RequireAdmin from "./Pages/Authentication/RequireAdmin";
import MyOrder from "./Pages/Dashboard/MyOrder";
import AddReview from "./Pages/Dashboard/AddReview";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/tool/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="profile" element={<Profile />}></Route>
          <Route path="myOrder" element={<MyOrder />}></Route>
          <Route path="addReview" element={<AddReview />}></Route>
          <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
