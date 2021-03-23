import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Card, CardText, Container } from "reactstrap";

export default function SpecificPayload(props) {
  let { id } = useParams();
  const [specificPayloadData, setSpecificPayloadData] = useState([]);

  // NEEDS TO RUN AFTER BUTTON IS CLICKED FOR SPECIFIC LAUNCH
  useEffect(() => {
    Axios.get(`https://api.spacexdata.com/v4/payloads/${props.id}`)
      .then((res) => {
        console.log(res.data);
        setSpecificPayloadData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

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
            Date: {specificPayloadData.date_local}
          </CardText>
          <CardText tag='h3' style={{ color: "#FFF" }}>
            Details: {specificPayloadData.details}
          </CardText>
          <CardText tag='h3' style={{ color: "#FFF" }}>{specificPayloadData.id}</CardText>
        </Card>
      </Container>
    </div>
  );
}
