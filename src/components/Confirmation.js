import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Confirmation = () => {
  const { flight, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const goHome = () => {
    dispatch({ type: "RESET" });
    history.push("/");
  };

  return (
    <div className="container">
      <h3>Booking Confirmed ✅</h3>

      <p><b>Name:</b> {user && user.name}</p>
      <p><b>From:</b> {flight && flight.from}</p>
      <p><b>To:</b> {flight && flight.to}</p>
      <p><b>Date:</b> {flight && flight.date}</p>

      <button onClick={goHome}>Go Home</button>
    </div>
  );
};

export default Confirmation;
