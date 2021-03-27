import React from "react";
import { Card, CardTitle, Container } from "reactstrap";
import { useHistory } from "react-router-dom";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SpaceXHomePage.css";

export default function SpaceXHomePage() {
  const history = useHistory();

  return (
    <div style={{ display: "flex", marginTop: "2rem" }}>
      {/* <Container style={{ marginTop: "4rem" }}>
      </Container> */}
      <Container className="spacex-card-container">
        <Card
          inverse
          className="spacex-homepage-card"
          onClick={() => history.push("/latestlaunch")}
        >
          <CardTitle tag="h2" className="mb-5">
            Latest SpaceX <br></br> Launch
          </CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="5x" />
        </Card>

        <Card
          inverse
          className="spacex-homepage-card"
          onClick={() => history.push("/upcominglaunch")}
        >
          <CardTitle tag="h2" className="mb-5">
            Upcoming SpaceX Launches
          </CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="5x" />
        </Card>

        <Card
          inverse
          className="spacex-homepage-card"
          onClick={() => history.push("/dragons")}
        >
          <CardTitle className="mb-5" tag="h2">
            Dragon Series Information
          </CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="5x" />
        </Card>

        <Card
          inverse
          className="spacex-homepage-card"
          onClick={() => history.push("/rockets")}
        >
          <CardTitle className="mb-5" tag="h2">
            SpaceX Rockets
          </CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="5x" />
        </Card>

        <Card
          inverse
          className="spacex-homepage-card"
          onClick={() => history.push("/capsules")}
        >
          <CardTitle className="mb-5" tag="h2">
            SpaceX Capsules
          </CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="5x" />
        </Card>

        <Card
          inverse
          className="spacex-homepage-card"
          onClick={() => history.push("/payloads")}
        >
          <CardTitle className="mb-5" tag="h2">
            SpaceX Payloads
          </CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="5x" />
        </Card>

        <Card
          inverse
          className="spacex-homepage-card"
          onClick={() => history.push("/starlink")}
        >
          <CardTitle className="mb-5" tag="h2">
            StarLink Satellites
          </CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="5x" />
        </Card>
        <Card
          inverse
          className="spacex-homepage-card"
          onClick={() => history.push("/")}
        >
          <CardTitle tag="h2" className="mb-5">
            Coming Soon
          </CardTitle>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="5x" />
        </Card>
      </Container>
      <Container className="twitter-container">
        <a
          className="twitter-timeline"
          href="https://twitter.com/spacex?ref_src=twsrc%5Etfw"
          data-height="600"
          // data-chrome="transparent"
          data-border-color="#FFFF"
          data-theme="dark"
        >
          Tweets by SpaceX 
        </a>
      </Container>
    </div>
  );
}
