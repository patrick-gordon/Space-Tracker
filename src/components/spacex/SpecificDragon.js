import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Card, CardText, Container } from "reactstrap";

export default function SpecificDragon() {
  let { id } = useParams();
  const [specificDragonData, setSpecificDragonData] = useState([]);

  // NEEDS TO RUN AFTER BUTTON IS CLICKED FOR SPECIFIC LAUNCH
  useEffect(() => {
    Axios.get(`https://api.spacexdata.com/v4/dragons/${id}`)
      .then((res) => {
        console.log(res.data);
        setSpecificDragonData(res.data);
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
            Name: {specificDragonData.name}
          </CardText>

          <CardText tag="h3" style={{ color: "#FFF" }}>
            Type: {specificDragonData.type}
          </CardText>
          <CardText tag="h3" style={{ color: "#FFF" }}>
            Reused: {specificDragonData.first_flight}
          </CardText>
          <CardText tag="h3" style={{ color: "#FFF" }}>
            First Flight: {specificDragonData.orbit}
          </CardText>
          <CardText tag="h3" style={{ color: "#FFF" }}>
            Description: {specificDragonData.description}
          </CardText>
        </Card>
      </Container>
    </div>
  );
}
// manufacturers, type, resused, orbit launch
