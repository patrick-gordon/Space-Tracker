import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Card, CardText, Container } from "reactstrap";

export default function SpecificCapsule() {
  let { id } = useParams();
  console.log(id)
  const [specificCapsuleData, setSpecificCapsuleData] = useState([]);

  // NEEDS TO RUN AFTER BUTTON IS CLICKED FOR SPECIFIC LAUNCH
  useEffect(() => {
    Axios.get(`https://api.spacexdata.com/v4/capsules/${id}`)
      .then((res) => {
        console.log(res.data);
        setSpecificCapsuleData(res.data);
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
            Serial: {specificCapsuleData.serial}
          </CardText>
          <CardText tag="h3" style={{ color: "#FFF" }}>
            Status: {specificCapsuleData.status}
          </CardText>
          <CardText tag="h3" style={{ color: "#FFF" }}>
            Reuse Count:{specificCapsuleData.reuse_count}
          </CardText>
          <CardText tag="h3" style={{ color: "#FFF" }}>
            Last Update: {specificCapsuleData.last_update}
          </CardText>
        </Card>
      </Container>
    </div>
  );
}
