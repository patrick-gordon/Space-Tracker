import React, {useEffect, useState} from 'react'
import Axios from "axios";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { useHistory } from "react-router-dom";


export default function Rockets() {
    const history = useHistory();
    const [rockets, setRockets] = useState([]);

    const fetchData = () => {
      Axios.get("https://api.spacexdata.com/v4/rockets")
        .then((res) => {
          setRockets(res.data);
          console.log(res.data)
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
                  className="mt-2"
                  style={{
                    backgroundColor: "#343435",
                    color: "#FFF",
                    textAlign: "center",
                    fontSize: "25px",
                  }}
                >
                  Name: {rocket.name}
                </ListGroupItem>
              </span>
            </ListGroup>
          );
        })}
      </Container>
        </div>
    )
}
