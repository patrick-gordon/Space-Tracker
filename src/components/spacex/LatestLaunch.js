import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, CardText } from "reactstrap";
import "./LatestLaunch.css";

export default function LatestLaunch() {
  const [spaceXData, setSpaceXData] = useState([]);

  const fetchData = () => {
    Axios.get("https://api.spacexdata.com/v4/launches/latest")
      .then((res) => {
        setSpaceXData(res.data);
        console.log(res.data);
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
      <Container className="spacex-latestlaunch-container">
        <CardText tag="h3" style={{ color: "#FFF" }}>
          NAME: {spaceXData.name}
        </CardText>
        <CardText tag="h3" style={{ color: "#FFF" }}>
          DATE: {spaceXData.date_local}
        </CardText>
        <CardText tag="h3" style={{ color: "#FFF" }}>
          DETAILS: {spaceXData.details}
        </CardText>
      </Container>
    </div>
  );
}
