import React from "react";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();

  return (
    <div className="container center">
      <h2>Welcome to Flight Booking App</h2>
      <button onClick={() => history.push("/flight-search")}>
        SEARCH FLIGHTS HERE
      </button>
    </div>
  );
};

export default Landing;
