import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Card, CardText, Container } from "reactstrap";

export default function SpecificStarLink() {
  let { id } = useParams();
  const [specificStarLink, setSpecificStarLink] = useState([]);

  // NEEDS TO RUN AFTER BUTTON IS CLICKED FOR SPECIFIC LAUNCH
  useEffect(() => {
    Axios.get(`https://api.spacexdata.com/v4/starlink/${id}`)
      .then((res) => {
        console.log(res.data);
        setSpecificStarLink(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <Container className='mt-4'
      >
        <Card
          style={{
            backgroundColor: "#343435",
          }}
        >
          <CardText tag='h3' style={{ color: "#FFF" }}>Name: {}</CardText>
          <CardText tag='h3' style={{ color: "#FFF" }}>
            Manufacturer: {specificStarLink.manufacturers}
          </CardText>
          <CardText tag='h3' style={{ color: "#FFF" }}>
            Type: {specificStarLink.type}
          </CardText>
          <CardText tag='h3' style={{ color: "#FFF" }}>Reused: {specificStarLink.reused}</CardText>
          <CardText tag='h3' style={{ color: "#FFF" }}>Orbit: {specificStarLink.orbit}</CardText>
          <CardText tag='h3' style={{ color: "#FFF" }}>ID: {specificStarLink.id}</CardText>

        </Card>
      </Container>
    </div>
  );
}
// manufacturers, type, resused, orbit launch