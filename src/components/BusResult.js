import React from "react";
import classes from "./BusResult.module.css";

/*
  arrivalTime: "12:09AM"
  busName: "zing Bus"
  date: "2023-01-21"
  departureTime: "6:00PM"
  destination: "delhi"
  id: "1"
  source: "jaipur"
  ticketPrice: "480"
  rating: 8


*/

function BusResult({ bus }) {
  return (
    <div className={classes["bus_container"]}>
      <h5>{bus.busName.toUpperCase()}</h5>
      <div className={classes["departure-wrapper"]}>
        <span>DEPARTURE</span>
        <h5>{bus.departureTime}</h5>
      </div>
      <div className={classes["arrival-wrapper"]}>
        <span>ARRIVAL</span>
        <h5>{bus.arrivalTime}</h5>
      </div>
      <div className={classes.rating}>
        <span>{bus.rating}&nbsp;</span>
        <span className={classes.small}>/ 10</span>
      </div>
      <div className={classes.ticket_price}>
        <span>{bus.ticketPrice}</span>₹
      </div>
    </div>
    // <div className="bg-warning m-3 p-4 d-flex justify-content-between">
    //   <h4>{bus.busName}</h4>
    // </div>
  );
}

export default BusResult;
