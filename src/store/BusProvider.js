import React, { useState } from "react";
import busContext from "./bus-data";

function BusProvider(props) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [journeyDate, setJournetDate] = useState("");

  function setFromData(value) {
    setFrom(value);
  }

  function setToData(value) {
    setTo(value);
  }

  function setJourneyDate(value) {
    setJournetDate(value);
  }

  return (
    <busContext.Provider
      value={{
        from: from,
        to: to,
        journeyDate: journeyDate,
        setFrom: setFromData,
        setTo: setToData,
        setDate: setJourneyDate,
      }}
    >
      {props.children}
    </busContext.Provider>
  );
}

export default BusProvider;
