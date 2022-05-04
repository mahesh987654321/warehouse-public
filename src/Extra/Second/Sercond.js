import React from "react";

const Sercond = ({ extra, handelClick }) => {
  const {
    name,
    image,
    supplierName,
    price,
    quantity,
    description,
    _id,
    email,
  } = extra;
  return (
    <div>
      {name}
      <div></div>
      {email}
      <div></div>
      <button onClick={() => handelClick(_id)}>Click Here</button>
    </div>
  );
};

export default Sercond;
