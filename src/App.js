import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NasaHomePage from "./components/nasa/NasaHomePage";
import SpaceXHomePage from "./components/spacex/SpaceXHomePage";
import UpcomingLaunch from "./components/spacex/UpcomingLaunch";
import SpecificLaunch from "./components/spacex/SpecificLaunch";
import Rockets from './components/spacex/Rockets';
import SpecificRocket from './components/spacex/SpecificRocket';
import Capsules from './components/spacex/Capsules';
import SpecificCapsule from "./components/spacex/SpecificCapsule";
import Payloads from './components/spacex/Payloads';
import SpecificPayload from './components/spacex/SpecficPayload'
import NavBar from "./components/NavBar";
import ApodPage from "./components/nasa/ApodPage";
import LatestLaunch from "./components/spacex/LatestLaunch";
import StarLink from './components/spacex/StarLink';
import SpecificStarLink from "./components/spacex/SpecificStarLink";
import HomePage from "./components/HomePage";
import Dragons from './components/spacex/Dragons'
import SpecificDragon from "./components/spacex/SpecificDragon";

function App() {
  return (
    <div>
      <Router>
        {/* <Container fluid='true' > */}
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          {/* Main Routes */}
          <Route path="/nasa" component={NasaHomePage}></Route>
          <Route path="/spacex" component={SpaceXHomePage}></Route>

          {/* Nasa subRoutes */}
          <Route path="/apod" component={ApodPage}></Route>

          {/* SpaceX SubRoutes */}
          <Route path="/latestlaunch" component={LatestLaunch}></Route>
          <Route path="/upcominglaunch" component={UpcomingLaunch}></Route>
          <Route path="/launch/:id" component={SpecificLaunch}></Route>
          <Route exact path="/rockets" component={Rockets}></Route>
          <Route path='/rockets/:id' component={SpecificRocket}></Route>
          <Route exact path="/payloads" component={Payloads}></Route>
          <Route path="/payloads/:id" component={SpecificPayload}></Route>
          <Route exact path="/capsules" component={Capsules}></Route>
          <Route path="/capsules/:id" component={SpecificCapsule}></Route>
          <Route exact path="/dragons" component={Dragons}></Route>
          <Route path="/dragons/:id" component={SpecificDragon}></Route>
          <Route exact path='/starlink' component={StarLink}></Route>
          <Route path='/starlink/:id' component={SpecificStarLink}></Route>
        </Switch>
        {/* </Container> */}
      </Router>
    </div>
  );
}

export default App;
