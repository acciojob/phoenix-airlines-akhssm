import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const FlightSearch = () => {
  const [trip, setTrip] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = () => {
    if (!from || !to || !date || (trip === "roundtrip" && !returnDate)) {
      alert("Please fill all fields");
      return;
    }

    // Mock flight data for demonstration
    const mockFlights = [
      { id: 1, from, to, date },
      { id: 2, from, to, date },
    ];
    setFlights(mockFlights);
  };

  const handleBooking = () => {
    if (!selectedFlight) {
      alert("Please select a flight");
      return;
    }

    dispatch({
      type: "SET_FLIGHT",
      payload: selectedFlight,
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

      {trip === "roundtrip" && (
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      )}

      <button className="book-flight" onClick={handleSearch}>
        Search Flights
      </button>

      {flights.length > 0 && (
        <>
          <h4>Available Flights</h4>
          <ul>
            {flights.map((flight) => (
              <li key={flight.id}>
                <label>
                  <input
                    type="radio"
                    name="selectedFlight"
                    value={flight.id}
                    onChange={() => setSelectedFlight(flight)}
                  />
                  {flight.from} ➡ {flight.to} on {flight.date}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleBooking}>Book Selected Flight</button>
        </>
      )}
    </div>
  );
};

export default FlightSearch;
