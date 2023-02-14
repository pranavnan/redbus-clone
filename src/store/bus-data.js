import React from "react";

const busContext = React.createContext({
  from: "",
  to: "",
  journeyDate: "",
  setFrom: () => {},
  setTo: () => {},
  setDate: () => {},
});

export default busContext;
