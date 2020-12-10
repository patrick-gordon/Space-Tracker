import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Row,
  Col,
  Button,
} from "reactstrap";
import { useHistory } from "react-router-dom";

export default function NasaHomePage() {
  const history = useHistory();

  return (
    <div>
      <Row>
        <Col md="auto">
          <Card inverse>
            <CardImg width="75%" src="./assets/Nasa.jpg" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle tag="h5">APOD</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
              <Button onClick={() => history.push("/apod")}>
                Go somewhere
              </Button>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col md="auto">
          <Card inverse>
            <CardImg width="75%" src="./assets/Nasa.jpg" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle tag="h5">APOD</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
              <Button>Go somewhere</Button>
            </CardImgOverlay>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
