import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import busContext from "../store/bus-data";
import BusResult from "./BusResult";
import classes from "./SearchResult.module.css";

function SearchResult() {
  const [buses, setBuses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const { from, to } = useContext(busContext);

  function paginate(busData) {}

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await fetch(
        `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses`
      );

      let busData = await response.json();
      setIsLoading(false);
      busData = busData.map((curr) => {
        return {
          ...curr,
          rating: getRandomNumber(6, 9),
        };
      });
      // busData => 30
      setBuses(busData);
      console.log(busData);
    }
    getData();
  }, []);

  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }
  /*

  arrivalTime: "12:09AM"
  busName: "zing Bus"
  date: "2023-01-21"
  departureTime: "6:00PM"
  destination: "delhi"
  id: "1"
  source: "jaipur"
  ticketPrice: "480"
  
  */
  return (
    <div className={classes["bus-render"]}>
      {buses.map((bus) => {
        return <BusResult key={bus.id * Math.random()} bus={bus} />;
      })}
    </div>
  );
}

export default SearchResult;
