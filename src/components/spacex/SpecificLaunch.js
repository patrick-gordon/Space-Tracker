import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Card, CardText, Container } from "reactstrap";

export default function SpecificLaunch() {
  let { id } = useParams();
  const [specificLaunchData, setSpecificLaunchData] = useState([]);

  // NEEDS TO RUN AFTER BUTTON IS CLICKED FOR SPECIFIC LAUNCH
  useEffect(() => {
    Axios.get(`https://api.spacexdata.com/v4/launches/${id}`)
      .then((res) => {
        console.log(res.data);
        setSpecificLaunchData(res.data);
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
          <CardText tag='h3' style={{ color: "#FFF" }}>Name: {specificLaunchData.name}</CardText>
          <CardText tag='h3' style={{ color: "#FFF" }}>
            Date: {specificLaunchData.date_local}
          </CardText>
          <CardText tag='h3' style={{ color: "#FFF" }}>
            Details: {specificLaunchData.details}
          </CardText>
          <CardText tag='h3' style={{ color: "#FFF" }}>{specificLaunchData.id}</CardText>
        </Card>
      </Container>
    </div>
  );
}
