import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const FlightSearch = () => {
  const [trip, setTrip] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = () => {
    if (!from || !to || !date) {
      alert("Please fill all fields");
      return;
    }

    dispatch({
      type: "SET_FLIGHT",
      payload: { trip, from, to, date },
    });

    history.push("/flight-booking");
  };

  return (
    <div className="container">
      <h3>Search Flights</h3>

      <select value={trip} onChange={(e) => setTrip(e.target.value)}>
        <option value="oneway">One Way</option>
        <option value="roundtrip">Round Trip</option>
      </select>

      <input
        type="text"
        placeholder="Source City"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />

      <input
        type="text"
        placeholder="Destination City"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button className="book-flight" onClick={handleSearch}>
        Book Flight
      </button>
    </div>
  );
};

export default FlightSearch;
