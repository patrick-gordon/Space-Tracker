import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

export default function SpecificLaunch() {
  let { id } = useParams();
  const [specificLaunchData, setSpecificLaunchData] = useState([]);

  // NEEDS TO RUN AFTER BUTTON IS CLICKED FOR SPECIFIC LAUNCH
  useEffect(() => {
    Axios.get(`https://api.spacexdata.com/v4/launches/${id}`)
      .then((res) => {
        console.log(res.data);
        setSpecificLaunchData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <h3>{specificLaunchData.name}</h3>
      <h3>{specificLaunchData.id}</h3>
      <h3>{specificLaunchData.details}</h3>
      <h3>{specificLaunchData.date_local}</h3>
    </div>
  );
}
