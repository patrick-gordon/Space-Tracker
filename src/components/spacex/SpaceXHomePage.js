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
  Container,
} from "reactstrap";
import { useHistory } from "react-router-dom";

export default function SpaceXHomePage() {
  const history = useHistory();

  return (
    <div>
      <Container
        fluid="lg"
        className="mt-5"
        style={{ border: "5px solid black" }}
      >
        <Row>
          <Col md="auto">
            <Card inverse>
              <CardImg
                width="75%"
                src="./assets/spacex_6.jpg"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle tag="h5">SpaceX Latest Launch Info</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
                <Button onClick={() => history.push("/latestlaunch")}>
                  Go somewhere
                </Button>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col md="auto">
            <Card inverse>
              <CardImg
                width="75%"
                src="./assets/spacex_7.jpg"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle tag="h5">
                  Upcoming SpaceX Launches Information
                </CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
                <Button onClick={() => history.push("/upcominglaunch")}>
                  Go somewhere
                </Button>
              </CardImgOverlay>
            </Card>
          </Col>

          <Col md="auto">
            <Card inverse>
              <CardImg
                width="100%"
                src="./assets/spacex_8.jpg"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle tag="h5">SpaceX Dragon Series Information</CardTitle>
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
          {/* <Col md='auto'>
          <Card inverse>
            <CardImg
              width="75%"
              src="./assets/spacex_8.jpg"
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardTitle tag="h5">SpaceX Recent News</CardTitle>
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
        </Col> */}
        </Row>
      </Container>
    </div>
  );
}
