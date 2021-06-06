import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { useHistory } from "react-router-dom";
import './StarLink.css'


export default function StarLink() {
  const history = useHistory();
  const [starLink, setStarLink] = useState([]);

  const fetchData = () => {
    Axios.get("https://api.spacexdata.com/v4/starlink")
      .then((res) => {
        setStarLink(res.data);
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
      <Container className="spacex-starLink-container">
        <h1 style={{ textAlign: "center" }}>StarLink Satellite</h1>
      </Container>
      <Container className="mt-3">
        {starLink.map((starLink) => {
          return (
            <ListGroup key={starLink.id}>
              <span
                onClick={() => {
                  history.push("/starLink/" + starLink.id);
                }}
              >
                <ListGroupItem action className="spacex-starLink-list">
                  Name: {starLink.spaceTrack.OBJECT_NAME}
                </ListGroupItem>
              </span>
            </ListGroup>
          );
        })}
      </Container>
    </div>
  );
}
