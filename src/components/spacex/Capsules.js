import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { useHistory } from "react-router-dom";

export default function Capsules() {
  const history = useHistory();
  const [capsules, setCapsules] = useState([]);

  const fetchData = () => {
    Axios.get("https://api.spacexdata.com/v4/capsules")
      .then((res) => {
        setCapsules(res.data);
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
      <Container style={{ padding: "5px", color: "#FFF" }} className="mt-4">
        <h1 style={{ textAlign: "center" }}>Capsules</h1>
      </Container>
      <Container className="mt-3">
        {capsules.map((capsule) => {
          return (
            <ListGroup>
              <span
                onClick={() => {
                  history.push("/capsules/" + capsule.id);
                }}
              >
                <ListGroupItem
                  action
                  className="mt-2"
                  style={{
                    backgroundColor: "#343435",
                    color: "#FFF",
                    textAlign: "center",
                    fontSize: "25px",
                  }}
                >
                  Serial Number: {capsule.serial}
                </ListGroupItem>
              </span>
            </ListGroup>
          );
        })}
      </Container>
    </div>
  );
}
