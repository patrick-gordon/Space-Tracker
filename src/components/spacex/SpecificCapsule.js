import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Card, CardText, Container } from "reactstrap";

export default function SpecificCapsule() {
  let { capsule_serial } = useParams();
  const [specificCapsuleData, setSpecificCapsuleData] = useState([]);

  // NEEDS TO RUN AFTER BUTTON IS CLICKED FOR SPECIFIC LAUNCH
  useEffect(() => {
    Axios.get(`https://api.spacexdata.com/v4/capsules/${capsule_serial}`)
      .then((res) => {
        console.log(res.data);
        setSpecificCapsuleData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [capsule_serial]);

  return (
    <div>
      <Container className='mt-4'
      >
        <Card
          style={{
            backgroundColor: "#343435",
          }}
        >
          <CardText tag='h3' style={{ color: "#FFF" }}>Name: {specificCapsuleData.capsule_serial}</CardText>
          <CardText tag='h3' style={{ color: "#FFF" }}>
            Status: {specificCapsuleData.status}
          </CardText>
          <CardText tag='h3' style={{ color: "#FFF" }}>
            Details: {specificCapsuleData.details}
          </CardText>
          <CardText tag='h3' style={{ color: "#FFF" }}>Reuse Count:{specificCapsuleData.reuse_count}</CardText>
        </Card>
      </Container>
    </div>
  );
}
