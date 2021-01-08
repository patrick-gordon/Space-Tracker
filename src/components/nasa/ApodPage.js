import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card, CardTitle, Container } from "reactstrap";

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
        <Container style={{ marginTop: "4rem"}}>
          <Card style={{ backgroundColor: "#726D7A" }}>
            <h3 style={{ color: "#FFF" }}>TITLE: {nasaData.title}</h3>
            <h3 style={{ color: "#FFF" }}>DATE:{nasaData.date}</h3>
            <img src={nasaData.hdurl} alt={nasaData.title} width={"900px"} />
            <h3 style={{ color: "#FFF" }}>
              DESCRIPTION:{nasaData.explanation}
            </h3>
          </Card>
        </Container>
      </div>
    </div>
  );
}
