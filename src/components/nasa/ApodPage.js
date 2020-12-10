import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function ApodPage() {
  const [nasaData, setNasaData] = useState([]);

  const fetchData = () => {
    Axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=XPoDajAhdPLhJdv3TBukwFvOer4bdRLscNyuMUQ3"
    )
      .then((res) => {
        console.log(res.data);
        setNasaData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <h3>TITLE: {nasaData.title}</h3>
        <h3>DATE:{nasaData.date}</h3>
        <img src={nasaData.hdurl} alt={nasaData.title} width={"500px"} />
        <h3>DESCRIPTION:{nasaData.explanation}</h3>
      </div>
    </div>
  );
}
