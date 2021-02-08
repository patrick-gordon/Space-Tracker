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

        <Container className='homepage-wrapper-container'
          style={{ }}
        >
          <Container
          className='homepage-words-container'
          >
            <h1>Your home for all space</h1>
          </Container>
          <Container>
            <section class="space">
              <div class="stars">
                <div class="stars-back"></div>
                <div class="stars-middle"></div>
                <div class="stars-front"></div>
              </div>
              <div class="rocket">
                <div class="fuselage">
                  <div class="nose"></div>
                  <div class="head">
                    <span class="window"></span>
                  </div>
                  <div class="neck"></div>
                  <div class="body"></div>
                  <div class="reactor"></div>
                  <div class="fire">
                    <div class="spark1"></div>
                    <div class="spark2"></div>
                    <div class="spark3"></div>
                    <div class="spark4"></div>
                    <div class="spark5"></div>
                    <div class="spark6"></div>
                  </div>
                </div>
                <div class="left-fin"></div>
                <div class="left-fin-end"></div>
                <div class="right-fin"></div>
                <div class="right-fin-end"></div>
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

      <Container className='homepage-btn-container'>
        <ButtonToolbar>
          <Button
            role="group"
            aria-pressed="true"
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
