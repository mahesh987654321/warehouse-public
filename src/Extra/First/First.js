import React from "react";
import Hooks from "../../Hooks/Hooks";
import Sercond from "../Second/Sercond";

const First = () => {
  const [service] = Hooks();
  const handelClick = (event) => {
    console.log("Click Here");
  };
  console.log(service);
  return (
    <div>
      {service.map((extra) => (
        <Sercond extra={extra} handelClick={handelClick}></Sercond>
      ))}
      <button>Click</button>
    </div>
  );
};

export default First;
