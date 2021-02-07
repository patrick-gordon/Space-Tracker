import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, CardText } from "reactstrap";

export default function LatestLaunch() {
  const [spaceXData, setSpaceXData] = useState([]);

  const fetchData = () => {
    Axios.get("https://api.spacexdata.com/v4/launches/latest")
      .then((res) => {
        setSpaceXData(res.data);
        console.log(res.data)
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
          backgroundColor: "#343435",
          // width: "365px",
          // height: "262px",
          // textAlign: 'center',
          alignItems: "center",
          marginTop: "5rem",
        }}
      >
        <CardText tag='h3' style={{ color: "#FFF" }}>NAME: {spaceXData.name}</CardText>
        <CardText tag='h3' style={{ color: "#FFF" }}>DATE: {spaceXData.date_local}</CardText>
        <CardText tag='h3' style={{ color: "#FFF" }}>DETAILS: {spaceXData.details}</CardText>
      </Container>
    </div>
  );
}
