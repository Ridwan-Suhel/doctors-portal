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
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import MyAppoinment from "./components/Pages/Dashboard/MyAppoinment";
import MyReview from "./components/Pages/Dashboard/MyReview";
import MyHistory from "./components/Pages/Dashboard/MyHistory";
import Users from "./components/Pages/Dashboard/Users";
import RequireAdmin from "./components/Shared/RequireAuth/RequireAdmin";
import AddDoctor from "./components/Pages/Dashboard/AddDoctor";
import ManageDoctors from "./components/Pages/Dashboard/ManageDoctors";
import Payment from "./components/Pages/Dashboard/Payment";

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
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyAppoinment />} />
          <Route path="review" element={<MyReview />} />
          <Route path="history" element={<MyHistory />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          />
          <Route
            path="adddoctor"
            element={
              <RequireAdmin>
                <AddDoctor />
              </RequireAdmin>
            }
          />
          <Route
            path="managedoctor"
            element={
              <RequireAdmin>
                <ManageDoctors />
              </RequireAdmin>
            }
          />
        </Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
