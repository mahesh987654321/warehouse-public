import React from "react";

const NotFound = () => {
  return (
    <div className="w-50 mx-auto">
      <h1 className="text-center" text-danger>
        Not Found
      </h1>
      <img
        src={`https://thumbs.dreamstime.com/b/website-error-page-not-found-vector-artwork-depicts-funny-humorous-scenario-human-stick-figure-http-request-85523047.jpg`}
        alt=""
      />
    </div>
  );
};

export default NotFound;
