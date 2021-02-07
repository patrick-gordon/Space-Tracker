import React from "react";
import { Card, CardTitle, Container } from "reactstrap";
import { useHistory } from "react-router-dom";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NasaHomePage() {
  const history = useHistory();

  return (
    <div
      style={{
        // border: "1px solid white",
        display: "flex",
        marginTop: '2rem'
      }}
    >
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

      <Container
        style={{
          width: "400px",
          // border: "1px solid white",
          marginTop: '2rem'
        }}
      >
        <a
          class="twitter-timeline"
          href="https://twitter.com/nasa?ref_src=twsrc%5Etfw"
          data-height="600"
          data-chrome='transparent'
          data-border-color='#FFFF'
          data-theme='dark'
        >
          Tweets by Nasa
        </a>
      </Container>
    </div>
  );
}
