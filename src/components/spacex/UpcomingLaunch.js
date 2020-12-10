import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
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
    <h1>Upcoming Flights</h1>
      {upcomingData.map((launch) => {
        return (
          <div>
            <ListGroup>
              <ListGroupItem>Name: {launch.name}</ListGroupItem>
              <ListGroupItem>ID: {launch.id}</ListGroupItem>
              <Button
                onClick={() => {
                  console.log("clicked");
                  history.push("/launch/" + launch.id);
                }}
                ></Button>
            </ListGroup>
          </div>
        );
      })}
    </>
  );
}
