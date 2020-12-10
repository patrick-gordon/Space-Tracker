import React from "react";
import NasaHomePage from "./nasa/NasaHomePage";
import SpaceXHomePage from "./spacex/SpaceXHomePage";
import UpcomingLaunch from './spacex/UpcomingLaunch'
import SpecificLaunch from './spacex/SpecificLaunch'
import NavBar from "./NavBar";
import { Container } from 'reactstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import ApodPage from "./nasa/ApodPage";
import LatestLaunch from "./spacex/LatestLaunch";

export default function HomePage() {
  return (
    <Router>
      {/* <Container fluid='true' > */}
      <NavBar />
      <Switch>
        <Route exact path="/">
    <p>This is the Home Page!!!!</p>
        </Route>

        {/* Main Routes */}
        <Route path="/nasa" component={NasaHomePage}></Route>
        <Route path="/spacex" component={SpaceXHomePage}></Route>

        {/* Nasa subRoutes */}
        <Route path="/apod" component={ApodPage}></Route>

        {/* SpaceX SubRoutes */}
        <Route path="/latestlaunch" component={LatestLaunch}></Route>
        <Route path='/upcominglaunch' component={UpcomingLaunch}></Route>
        <Route path='/launch/:id' component={SpecificLaunch}></Route>
      </Switch>
      {/* </Container> */}
    </Router>
  );
}
