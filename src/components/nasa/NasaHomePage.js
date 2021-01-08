import React from "react";
import { Card, CardTitle, Button, Container } from "reactstrap";
import { useHistory } from "react-router-dom";
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NasaHomePage() {
  const history = useHistory();

  return (
    <div>
      <Container style={{ marginTop: "4rem" }}>
        <h1 style={{ color: "#AC4139", textAlign: "center" }}>
          Nasa Information
        </h1>
      </Container>
      <Container
        style={{
          border: "1px solid white",
          // width: "1216px",
          // height: "262px",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "3rem",
        }}
      >
        <Card
          inverse
          style={{
            backgroundColor: "#726D7A",
            width: "365px",
            height: "262px",
            textAlign: "center",
            alignItems: 'center'
          }}
        >
          <CardTitle tag="h5" onClick={() => history.push("/apod")}>APOD</CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size='5x' onClick={() => history.push("/apod")} />
        </Card>
        {/* <Card
          inverse
          style={{
            backgroundColor: "#726D7A",
            width: "365px",
            height: "262px",
            textAlign: "center",
            alignItems: 'center'
          }}
        >
          <CardTitle tag="h5">APOD</CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size='5x' onClick={() => history.push("/apod")} />
        </Card> */}
      </Container>
    </div>
  );
}
