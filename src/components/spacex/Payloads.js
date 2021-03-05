import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { useHistory } from "react-router-dom";
import "./Payloads.css";

export default function Payloads() {
  const history = useHistory();
  const [payloads, setPayloads] = useState([]);

  const fetchData = () => {
    Axios.get("https://api.spacexdata.com/v4/payloads")
      .then((res) => {
        setPayloads(res.data);
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
      <Container className="spacex-payloads-container">
        <h1 style={{ textAlign: "center" }}>Payloads</h1>
      </Container>
      <Container className="mt-3">
        {payloads.map((payload) => {
          return (
            <ListGroup>
              <span
                onClick={() => {
                  history.push("/payload/" + payload.id);
                }}
              >
                <ListGroupItem action className="spacex-payloads-list">
                  Name: {payload.name}
                </ListGroupItem>
              </span>
            </ListGroup>
          );
        })}
      </Container>
    </div>
  );
}
