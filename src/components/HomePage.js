import React from "react";
import { Container, Button, ButtonToolbar } from "reactstrap";
import { useHistory } from "react-router-dom";
import "./HomePage.scss";

export default function HomePage() {
  const history = useHistory();
  return (
    <div>
      <div>
        <hr
          style={{
            borderTop: "1px solid white",
          }}
        ></hr>

        <Container className="homepage-wrapper-container">
          <Container className="homepage-words-container">
            <h1>Your home for all space</h1>
          </Container>
          <Container>
            <section className="space">
              <div className="stars">
                <div className="stars-back"></div>
                <div className="stars-middle"></div>
                <div className="stars-front"></div>
              </div>
              <div className="rocket">
                <div className="fuselage">
                  <div className="nose"></div>
                  <div className="head">
                    <span className="window"></span>
                  </div>
                  <div className="neck"></div>
                  <div className="body"></div>
                  <div className="reactor"></div>
                  <div className="fire">
                    <div className="spark1"></div>
                    <div className="spark2"></div>
                    <div className="spark3"></div>
                    <div className="spark4"></div>
                    <div className="spark5"></div>
                    <div className="spark6"></div>
                  </div>
                </div>
                <div className="left-fin"></div>
                <div className="left-fin-end"></div>
                <div className="right-fin"></div>
                <div className="right-fin-end"></div>
              </div>
            </section>
          </Container>
          {/* <Card style={{ backgroundColor: '#343435'}} onClick={() => history.push("/nasa")}>
        <CardImg src="/assets/wormLogo.png" alt="Nasa Logo" />
        <CardImgOverlay></CardImgOverlay>
        <CardTitle></CardTitle>
      </Card>

      <Card style={{ backgroundColor: '#726D7A'}} onClick={() => history.push("/spacex")}>
        <CardImg width="100%" src="" alt="SpaceX Logo" />
        <CardImgOverlay></CardImgOverlay>
        <CardTitle></CardTitle>
      </Card> */}
        </Container>
        <hr
          style={{
            borderTop: "1px solid white",
          }}
        ></hr>
      </div>

      <Container className="homepage-btn-container">
        <ButtonToolbar>
          <Button
            role="group"
            className="spacex-button"
            onClick={() => history.push("/spacex")}
          >
            Explore SpaceX
          </Button>
          <Button
            role="group"
            className="nasa-button"
            onClick={() => history.push("/nasa")}
          >
            Explore Nasa
          </Button>
        </ButtonToolbar>
      </Container>
    </div>
  );
}
