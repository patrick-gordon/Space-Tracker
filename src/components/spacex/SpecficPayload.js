import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Card, CardText, Container } from "reactstrap";

export default function SpecificPayload() {
  let { id } = useParams();
  const [specificPayloadData, setSpecificPayloadData] = useState([]);

  // NEEDS TO RUN AFTER BUTTON IS CLICKED FOR SPECIFIC LAUNCH
  useEffect(() => {
    Axios.get(`https://api.spacexdata.com/v4/payloads/${id}`)
      .then((res) => {
        console.log(res.data);
        setSpecificPayloadData(res.data);
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
          <CardText tag='h3' style={{ color: "#FFF" }}>Name: {specificPayloadData.name}</CardText>
          <CardText tag='h3' style={{ color: "#FFF" }}>
            Manufacturer: {specificPayloadData.manufacturers}
          </CardText>
          <CardText tag='h3' style={{ color: "#FFF" }}>
            Type: {specificPayloadData.type}
          </CardText>
          <CardText tag='h3' style={{ color: "#FFF" }}>Reused: {specificPayloadData.reused}</CardText>
          <CardText tag='h3' style={{ color: "#FFF" }}>Orbit: {specificPayloadData.orbit}</CardText>
        </Card>
      </Container>
    </div>
  );
}
// manufacturers, type, resused, orbit launch