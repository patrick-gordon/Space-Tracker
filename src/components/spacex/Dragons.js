import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { useHistory } from "react-router-dom";
import './Dragons.css'

export default function Dragons() {
  const history = useHistory();
  const [dragons, setDragons] = useState([]);

  const fetchData = () => {
    Axios.get("https://api.spacexdata.com/v4/dragons")
      .then((res) => {
        setDragons(res.data);
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
      <Container className="spacex-dragons-container">
        <h1 style={{ textAlign: "center" }}>Dragons</h1>
      </Container>
      <Container className="mt-3">
        {dragons.map((dragon) => {
          return (
            <ListGroup key={dragon.id}>
              <span
                onClick={() => {
                  history.push("/dragons/" + dragon.id);
                }}
              >
                <ListGroupItem action className="spacex-dragons-list">
                  Name: {dragon.name}
                </ListGroupItem>
              </span>
            </ListGroup>
          );
        })}
      </Container>
    </div>
  );
}
