// import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./component/HomePage/HomePage";

import Blogs from "./component/Blogs/Blogs";
import Login from "../src/component/Login/Login";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
      {/* 
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
