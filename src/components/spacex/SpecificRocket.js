import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Card, CardText, Container } from "reactstrap";

export default function SpecificRocket() {
  let { id } = useParams();
  const [specificRocketData, setSpecificRocketData] = useState([]);

  // NEEDS TO RUN AFTER BUTTON IS CLICKED FOR SPECIFIC ROCKET
  useEffect(() => {
    Axios.get(`https://api.spacexdata.com/v4/rockets/${id}`)
      .then((res) => {
        console.log(res.data);
        setSpecificRocketData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <Container className="mt-4">
        <Card
          style={{
            backgroundColor: "#343435",
          }}
        >
          <CardText tag="h3" style={{ color: "#FFF" }}>
            Name: {specificRocketData.name}
          </CardText>
          <CardText tag="h3" style={{ color: "#FFF" }}>
            First Flight: {specificRocketData.first_flight}
          </CardText>
          <CardText tag="h3" style={{ color: "#FFF" }}>
            Success Rate: {specificRocketData.success_rate_pct}%
          </CardText>
          <CardText tag="h3" style={{ color: "#FFF" }}>
            Active: {specificRocketData.active}
          </CardText>
          <CardText tag="h3" style={{ color: "#FFF" }}>
            Cost Per Launch: ${specificRocketData.cost_per_launch}
          </CardText>
          <CardText tag="h3" style={{ color: "#FFF" }}>
            Description: {specificRocketData.description}
          </CardText>
        </Card>
      </Container>
    </div>
  );
}
