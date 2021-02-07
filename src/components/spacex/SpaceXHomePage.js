import React from "react";
import { Card, CardTitle, Container } from "reactstrap";
import { useHistory } from "react-router-dom";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SpaceXHomePage() {
  const history = useHistory();

  return (
    <div style={{border: '3px solid black', display: 'flex'}}>
      {/* <Container style={{ marginTop: "4rem" }}>
      </Container> */}
      <Container
        style={{
          // border: "1px solid white",
          // width: "1216px",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      > 
        <Card
          inverse
          style={{
            backgroundColor: "#343435",
            width: "20.5rem",
            height: "15rem",
            textAlign: "center",
            alignItems: "center",
            marginTop: '2rem'
          }}
          onClick={() => history.push("/latestlaunch")}
        >
          <CardTitle tag="h2" className="mb-5">
            Latest SpaceX <br></br> Launch
          </CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="5x" />
        </Card>

        <Card
          inverse
          style={{
            backgroundColor: "#343435",
            width: "20.5rem",
            height: "15rem",
            textAlign: "center",
            alignItems: "center",
            marginTop: '2rem'
          }}
          onClick={() => history.push("/upcominglaunch")}
        >
          <CardTitle tag="h2" className="mb-5">
            Upcoming SpaceX Launches
          </CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="5x" />
        </Card>

        <Card
          inverse
          style={{
            backgroundColor: "#343435",
            width: "20.5rem",
            height: "15rem",
            textAlign: "center",
            alignItems: "center",
            marginTop: '2rem'
          }}
          onClick={() => history.push("/")}
        >
          <CardTitle className="mb-5" tag="h2">
            Dragon Series Information
          </CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="5x" />
        </Card>

        <Card
          inverse
          style={{
            backgroundColor: "#343435",
            width: "20.5rem",
            height: "15rem",
            textAlign: "center",
            alignItems: "center",
            marginTop: '2rem'

          }}
          onClick={() => history.push("/rockets")}
        >
          <CardTitle className="mb-5" tag="h2">
            SpaceX Rockets
          </CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="5x" />
        </Card>

        <Card
          inverse
          style={{
            backgroundColor: "#343435",
            width: "20.5rem",
            height: "15rem",
            textAlign: "center",
            alignItems: "center",
            marginTop: '2rem'

          }}
          onClick={() => history.push("/capsules")}
        >
          <CardTitle className="mb-5" tag="h2">
            SpaceX Capsules
          </CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="5x" />
        </Card>

        
        <Card
          inverse
          style={{
            backgroundColor: "#343435",
            width: "20.5rem",
            height: "15rem",
            textAlign: "center",
            alignItems: "center",
            marginTop: '2rem'

          }}
          onClick={() => history.push("/payloads")}
        >
          <CardTitle className="mb-5" tag="h2">
            SpaceX Payloads
          </CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="5x" />
        </Card>

        <Card
          inverse
          style={{
            backgroundColor: "#343435",
            width: "20.5rem",
            height: "15rem",
            textAlign: "center",
            alignItems: "center",
            marginTop: '2rem'
          }}
          onClick={() => history.push("/")}
        >
          <CardTitle className="mb-5" tag="h2">
            Starship Updates and News
          </CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="5x" />
        </Card> 
      </Container>
      <Container 
        style={{
          width: '400px',
          // border: "1px solid white",
          marginTop: '2rem'
        }}
      >
        <a class="twitter-timeline" href="https://twitter.com/spacex?ref_src=twsrc%5Etfw">Tweets by elonmusk</a> 
      </Container>
    </div>
  );
}
