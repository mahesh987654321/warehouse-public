import { useEffect, useState } from "react";

const useServiceDetails = (id) => {
  const [services, setService] = useState({});

  useEffect(() => {
    const url = `https://safe-atoll-27421.herokuapp.com/service/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  return [services];
};

export default useServiceDetails;
