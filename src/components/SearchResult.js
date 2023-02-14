import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import BusResult from "./BusResult";
import classes from "./SearchResult.module.css";
import { GrPrevious, GrNext } from "react-icons/gr";

function SearchResult() {
  const [buses, setBuses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // const { from, to } = useContext(busContext);

  function paginate(busData) {
    const perPage = 6;
    const totalPages = Math.ceil(busData.length / perPage);

    const newBusData = Array.from({ length: totalPages }, (_, idx) => {
      return busData.slice(idx * perPage, idx * perPage + perPage);
    });
    return newBusData;
  }

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
      setBuses(paginate(busData));
    }
    getData();
  }, []);

  function clickHandler(id, eventDetail) {
    if (eventDetail === "prev") {
      if (page === 0) {
        setPage(buses.length - 1);
      } else {
        setPage((prev) => prev - 1);
      }
    } else if (eventDetail === "next") {
      if (page === buses.length - 1) {
        setPage(0);
      } else {
        setPage((prev) => prev + 1);
      }
    } else {
      setPage(id);
    }
  }

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
      {buses[page]?.map((bus) => {
        return <BusResult key={bus.id * Math.random()} bus={bus} />;
      })}
      <div className={classes["parent_container"]}>
        <div className={classes["navigation_container"]}>
          <span
            className={classes["icon_container"]}
            onClick={() => clickHandler(0, "prev")}
          >
            <GrPrevious className={classes.icon} />
          </span>
          {buses.map((_, idx) => {
            return (
              <button
                onClick={() => clickHandler(idx, "directClick")}
                className={`${classes.navigation_button} ${
                  idx === page ? classes.active : ""
                }`}
                key={idx}
              >
                {idx + 1}
              </button>
            );
          })}
          <span
            onClick={() => clickHandler(0, "next")}
            className={classes["icon_container"]}
          >
            <GrNext className={classes.icon} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
