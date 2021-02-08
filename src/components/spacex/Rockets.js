import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { useHistory } from "react-router-dom";
import './Rockets.css'

export default function Rockets() {
  const history = useHistory();
  const [rockets, setRockets] = useState([]);

  const fetchData = () => {
    Axios.get("https://api.spacexdata.com/v4/rockets")
      .then((res) => {
        setRockets(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Container className='spacex-rockets-container'>
        <h1 style={{ textAlign: "center" }}>Rockets</h1>
      </Container>
      <Container className="mt-3">
        {rockets.map((rocket) => {
          return (
            <ListGroup>
              <span
                onClick={() => {
                  history.push("/rockets/" + rocket.id);
                }}
              >
                <ListGroupItem
                  action
                  className='spacex-rockets-list'
                >
                  Name: {rocket.name}
                </ListGroupItem>
              </span>
            </ListGroup>
          );
        })}
      </Container>
    </div>
  );
}
