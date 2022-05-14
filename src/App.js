import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Header from "./components/Shared/Header/Header";
import NotFound from "./components/Pages/NotFound/NotFound";
import Appoinment from "./components/Pages/Appoinment/Appoinment";
import Signup from "./components/Pages/Signup/Signup";
import RequireAuth from "./components/Shared/RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/appoinment"
          element={
            <RequireAuth>
              <Appoinment></Appoinment>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
