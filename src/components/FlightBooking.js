import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const FlightBooking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const flight = useSelector((state) => state.flight);

  if (!flight) {
    history.push("/flight-search"); // redirect if no flight selected
    return null;
  }

  const confirmBooking = () => {
    if (!name || !email || !phone) {
      alert("All fields are required");
      return;
    }

    dispatch({
      type: "SET_USER",
      payload: { name, email, phone },
    });

    history.push("/confirmation");
  };

  return (
    <div className="container">
      <h3>Enter Passenger Details</h3>
      <p>
        <b>Flight:</b> {flight.from} ➡ {flight.to} on {flight.date}
      </p>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={confirmBooking}>Confirm Booking</button>
    </div>
  );
};

export default FlightBooking;
