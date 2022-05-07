import React, { useEffect, useState } from "react";

const Hooks = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("https://safe-atoll-27421.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return [service, setService];
};

export default Hooks;
