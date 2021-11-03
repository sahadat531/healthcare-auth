import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Details from "../Details/Details";

const ServiceDetails = () => {
  const { id } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);

  useEffect(() => {
    const url = `/data.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, [id]);

  return (
    <div>
      <h2>Details:{id}</h2>
      {serviceDetails.map((data) => (
        <Details data={data}></Details>
      ))}
    </div>
  );
};

export default ServiceDetails;
