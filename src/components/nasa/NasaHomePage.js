import React from "react";
import { Card, CardTitle, Container } from "reactstrap";
import { useHistory } from "react-router-dom";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NasaHomePage.css";

export default function NasaHomePage() {
  const history = useHistory();

  return (
    <div className="nasa-homepage-wrapper">
      <Container className="nasa-homepage-container">
        <Card
          inverse
          className="nasa-homepage-card"
          onClick={() => history.push("/apod")}
        >
          <CardTitle tag="h5" style={{ marginTop: "1rem" }}>
            APOD
          </CardTitle>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            size="5x"
            style={{ marginTop: "2rem" }}
          />
        </Card>
      </Container>

      <Container className="nasa-twitter-homepage-container">
        <a
          class="twitter-timeline"
          href="https://twitter.com/nasa?ref_src=twsrc%5Etfw"
          data-height="600"
          data-chrome="transparent"
          data-border-color="#FFFF"
          data-theme="dark"
        >
          Tweets by Nasa
        </a>
      </Container>
    </div>
  );
}
