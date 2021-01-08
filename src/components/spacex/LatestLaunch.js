import React, { useState, useEffect } from "react";
import Axios from "axios";
import ReactPlayer from "react-player";
import { Card, CardTitle, Container } from "reactstrap";

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
      <Container
        style={{
          backgroundColor: "#726D7A",
          // width: "365px",
          // height: "262px",
          // textAlign: 'center',
          alignItems: "center",
          marginTop: "5rem",
        }}
      >
        <h3 style={{ color: "#FFF" }}>NAME: {spaceXData.name}</h3>
        <h3 style={{ color: "#FFF" }}>DATE: {spaceXData.date_local}</h3>
        {/* <ReactPlayer url={spaceXData.links.webcast} /> */}
        <h3 style={{ color: "#FFF" }}>DETAILS: {spaceXData.details}</h3>
      </Container>
    </div>
  );
}
