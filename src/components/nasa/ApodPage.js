import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card, CardText, Container } from "reactstrap";

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
        <Container style={{ marginTop: "4rem" }}>
          <Card style={{ backgroundColor: "#726D7A" }}>
            <CardText tag='h3' style={{ color: "#FFF" }}>TITLE: {nasaData.title}</CardText>
            <CardText tag='h3' style={{ color: "#FFF" }}>DATE: {nasaData.date}</CardText>
            <img src={nasaData.hdurl} alt={nasaData.title} width={"900px"} />
            <CardText tag='h3' style={{ color: "#FFF" }}>
              DESCRIPTION:{nasaData.explanation}
            </CardText>
          </Card>
        </Container>
      </div>
    </div>
  );
}
