// import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./component/HomePage/HomePage";

import Blogs from "./component/Blogs/Blogs";
import Login from "../src/component/Login/Login";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Regester from "./component/Regester/Regester";
import RequireAuth from "./component/RequireAuth/RequireAuth";
import Order from "./component/Order/Order";
import Inventory from "./component/Inventory/Inventory";
import ManageItem from "../src/component/ManageItem/ManageItem";
import AddItem from "./component/AddItem/AddItem";
import MyItem from "./component/MyItem/MyItem";
import ServiceBtn from "./ServiceBtn/ServiceBtn";
function App() {
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/regester" element={<Regester></Regester>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route
          path="service/:id"
          element={
            <RequireAuth>
              <ServiceBtn></ServiceBtn>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageItem></ManageItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/order"
          element={
            <RequireAuth>
              <Order></Order>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/add"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/my"
          element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }
        ></Route>
      </Routes>
      {/* 
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
