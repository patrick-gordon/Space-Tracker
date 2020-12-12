import React from "react";
import { Card, CardTitle,  Container } from "reactstrap";
import { useHistory } from "react-router-dom";
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SpaceXHomePage() {
  const history = useHistory();

  return (
    <div>
      <Container style={{marginTop: '4rem'}}>
        <h1 style={{color: '#AC4139', textAlign: 'center'}}>SpaceX Information</h1>
      </Container>
      <Container
        style={{
          border: "1px solid white",
          // width: "1216px",
          // height: "262px",
          display: "flex",
          justifyContent: 'space-evenly',
          marginTop: '10rem'
          
        }}
      >
        <Card
          inverse
          style={{
            backgroundColor: "#726D7A",
            width: "365px",
            height: "262px",
            textAlign: 'center',
            alignItems: 'center'
          }}
        >
          <CardTitle tag="h2">Latest SpaceX Launches</CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size='5x' onClick={() => history.push("/latestlaunch")} />
        </Card>

        <Card
          inverse
          style={{
            backgroundColor: "#726D7A",
            width: "365px",
            height: "262px",
            textAlign: 'center',
            alignItems: 'center'
          }}
        >
          <CardTitle tag="h2">Upcoming SpaceX Launches</CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size='5x' onClick={() => history.push("/upcominglaunch")} />
        </Card>

        <Card
          inverse
          style={{
            backgroundColor: "#726D7A",
            width: "365px",
            height: "262px",
            textAlign: 'center',
            alignItems: 'center'
          }}
        >
          <CardTitle tag="h2">Dragon Series Information</CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size='5x' onClick={() => history.push("/")} />
        </Card>
      </Container>
    </div>
  );
}
