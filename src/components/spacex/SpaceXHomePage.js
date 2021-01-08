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
        <h1 style={{color: '#FFF', textAlign: 'center'}}>SpaceX Information</h1>
      </Container>
      <Container
        style={{
          // border: "1px solid white",
          // width: "1216px",
          // height: "262px",
          display: "flex",
          justifyContent: 'space-evenly',
          marginTop: '3rem'
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
          onClick={() => history.push("/latestlaunch")}
        >
          <CardTitle tag="h2" className='mb-5'>Latest SpaceX <br></br> Launch</CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size='5x'  />
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
          onClick={() => history.push("/upcominglaunch")}
        >
          <CardTitle tag="h2" className='mb-5' >Upcoming SpaceX Launches</CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size='5x'/>
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
          onClick={() => history.push("/")}
        >
          <CardTitle className='mb-5' tag="h2">Dragon Series Information</CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size='5x'/>
        </Card>
      </Container>
    </div>
  );
}
