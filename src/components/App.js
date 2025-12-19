import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import FlightSearch from "./FlightSearch";
import FlightBooking from "./FlightBooking";
import Confirmation from "./Confirmation";

const App = () => {
  return (
    <>
      <header className="header">Flight Booking App</header>

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/flight-search" component={FlightSearch} />
        <Route path="/flight-booking" component={FlightBooking} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </>
  );
};

export default App;
