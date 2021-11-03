import React, { useEffect, useState } from "react";
import Home from "../Home/Home";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      {services.map((service) => (
        <Home service={service}></Home>
      ))}
    </div>
  );
};

export default Services;
