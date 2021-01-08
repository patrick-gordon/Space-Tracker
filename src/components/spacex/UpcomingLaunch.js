import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem, Button, Container } from "reactstrap";
import { useHistory } from "react-router-dom";

export default function UpcomingLaunch() {
  const history = useHistory();
  const [upcomingData, setUpcomingData] = useState([]);

  const fetchData = () => {
    Axios.get("https://api.spacexdata.com/v4/launches/upcoming")
      .then((res) => {
        console.log(res.data);
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
      <Container
        style={{ padding: "5px",  color: '#AC4139' }}
        className="mt-4"
      >
        <h1 style={{textAlign: 'center'}}>Upcoming Flights</h1>
      </Container>
      <Container style={{ border: "1px solid white" }} className="mt-3">
        {upcomingData.map((launch) => {
          return (
            <ListGroup>
              <a
                onClick={() => {
                  history.push("/launch/" + launch.id);
                }}
              >
                <ListGroupItem action className='mt-2' style={{backgroundColor: '#726D7A', color: '#FFF', textAlign: ''}}>
                  Name: {launch.name} ID: {launch.id}
                </ListGroupItem>
              </a>
            </ListGroup>
          );
        })}
      </Container>
    </>
  );
}
