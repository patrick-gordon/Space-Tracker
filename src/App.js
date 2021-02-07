import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NasaHomePage from "./components/nasa/NasaHomePage";
import SpaceXHomePage from "./components/spacex/SpaceXHomePage";
import UpcomingLaunch from "./components/spacex/UpcomingLaunch";
import SpecificLaunch from "./components/spacex/SpecificLaunch";
import Rockets from './components/spacex/Rockets';
import Capsules from './components/spacex/Capsules';
import Payloads from './components/spacex/Payloads';
import NavBar from "./components/NavBar";
import ApodPage from "./components/nasa/ApodPage";
import LatestLaunch from "./components/spacex/LatestLaunch";
import Starship from './components/spacex/Starship';
import HomePage from "./components/HomePage";

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
          <Route path="/rockets" component={Rockets}></Route>
          <Route path="/payloads" component={Payloads}></Route>
          <Route path="/capsules" component={Capsules}></Route>
          <Route path='/starship' component={Starship}></Route>
        </Switch>
        {/* </Container> */}
      </Router>
    </div>
  );
}

export default App;
