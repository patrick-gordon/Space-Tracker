import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem, Container } from "reactstrap";
import { useHistory } from "react-router-dom";
import "./UpcomingLaunch.css";

export default function UpcomingLaunch() {
  const history = useHistory();
  const [upcomingData, setUpcomingData] = useState([]);

  const fetchData = () => {
    Axios.get("https://api.spacexdata.com/v4/launches/upcoming")
      .then((res) => {
        setUpcomingData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Container className="spacex-upcominglaunch-container">
        <h1 style={{ textAlign: "center" }}>Upcoming Flights</h1>
      </Container>
      <Container className="mt-3">
        {upcomingData.map((launch) => {
          return (
            <ListGroup key={launch.id}>
              <span
                onClick={() => {
                  history.push("/launch/" + launch.id);
                }}
              >
                <ListGroupItem action className="spacex-launchname-list">
                  Name: {launch.name}
                </ListGroupItem>
              </span>
            </ListGroup>
          );
        })}
      </Container>
    </>
  );
}
