import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./component/HomePage/HomePage";
import Blogs from "./component/Blogs/Blogs";
import Login from "../src/component/Login/Login";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Regester from "./component/Regester/Regester";
import RequireAuth from "./component/RequireAuth/RequireAuth";
import Order from "./component/Order/Order";
import ManageItem from "../src/component/ManageItem/ManageItem";
import MyItem from "./component/MyItem/MyItem";
import All from "./All/All";
import InventoryId from "./component/InventoryId/InventoryId";
import Forms from "./Forms/Forms";
import UpdateInfo from "./UpdateInfo/UpdateInfo";
import AddNew from "./component/AddNew/AddNew";
import First from "./Extra/First/First";
import Sercond from "./Extra/Second/Sercond";
import NotFound from "./NotFound/NotFound";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/regester" element={<Regester></Regester>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/service" element={<Forms></Forms>}></Route>

        <Route
          path="/inventory/:id"
          element={<InventoryId></InventoryId>}
        ></Route>

        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageItem></ManageItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="/order" element={<Order></Order>}></Route>

        <Route path="/update/:id" element={<UpdateInfo></UpdateInfo>}></Route>
        <Route path="/add/:id" element={<AddNew />}></Route>
        <Route path="/first" element={<First />}></Route>
        <Route path="/second" element={<Sercond></Sercond>}></Route>
        <Route path="/my" element={<MyItem></MyItem>}></Route>
        <Route path="/all" element={<All></All>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
