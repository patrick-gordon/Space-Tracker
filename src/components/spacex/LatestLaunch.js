import React, { useState, useEffect } from "react";
import Axios from 'axios'
import ReactPlayer from "react-player";


export default function LatestLaunch() {
  const [spaceXData, setSpaceXData] = useState([]);

  const fetchData = () => {
    Axios.get("https://api.spacexdata.com/v4/launches/latest")
      .then((res) => {
        setSpaceXData(res.data);
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
      <h3>NAME:{spaceXData.name}</h3>
      <h3>DATE: {spaceXData.date_local}</h3>
      {/* <ReactPlayer url={spaceXData.links.webcast} /> */}
      <h3>DETAILS: {spaceXData.details}</h3>
    </div>
  );
}
