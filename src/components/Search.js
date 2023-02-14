import React, { useContext } from "react";
import classes from "./Search.module.css";
import { AiOutlineSwap } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import busContext from "../store/bus-data";

function Search() {
  // const [from, setFrom] = useState("");
  // const [to, setTo] = useState("");
  // const [journeyDate, setJournetDate] = useState("");

  const { from, to, journeyDate, setDate, setTo, setFrom } =
    useContext(busContext);

  const navigate = useNavigate();

  function swapHandler() {
    setFrom(to);
    setTo(from);
  }

  function toHandler(e) {
    setTo(e.target.value);
  }

  function fromHandler(e) {
    setFrom(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (!from || !to || !journeyDate) {
      toast.error("All Fields are required");
    } else {
      navigate("/search");
    }
  }

  function datehandler(e) {
    setDate(e.target.value);
  }
  return (
    <div className={classes["wrapper_search"]}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={fromHandler}
        />
        <span className={classes.icon_wrapper}>
          <AiOutlineSwap onClick={swapHandler} className={classes.swap_icon} />
        </span>
        <input value={to} type="text" placeholder="To" onChange={toHandler} />
        <input
          onChange={datehandler}
          value={journeyDate}
          type="date"
          placeholder=""
        />
        <button type="submit">Search Buses</button>
        <Toaster />
      </form>
    </div>
  );
}

export default Search;
