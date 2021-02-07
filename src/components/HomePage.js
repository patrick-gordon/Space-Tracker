import React from "react";
import {
  Card,
  CardTitle,
  Container,
  CardImg,
  CardImgOverlay,
} from "reactstrap";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  const history = useHistory();
  return (
    <Container style={{ marginTop: "4rem" }}>
      <Container style={{color: 'white'}}>
        <h1>Space Tracker</h1>
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
  );
}
