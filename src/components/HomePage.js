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

  const history = useHistory()
  return (
    <Container>
      <Card onClick={() => history.push("/nasa")}>
        <CardImg src="/Logos/Nasa_worm_logo.png" alt="Nasa Logo" />
        <CardImgOverlay></CardImgOverlay>
        <CardTitle></CardTitle>
      </Card>

      <Card onClick={() => history.push("/spacex")}>
        <CardImg width="100%" src="/Logos/worm.jpg" alt="SpaceX Logo" />
        <CardImgOverlay></CardImgOverlay>
        <CardTitle></CardTitle>
      </Card>
    </Container>
  );
}
