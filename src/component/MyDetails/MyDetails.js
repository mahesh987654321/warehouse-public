import React from "react";

const MyDetails = ({ product }) => {
  const { email } = product;
  return (
    <div>
      <p>Email is: {email}</p>
    </div>
  );
};

export default MyDetails;
