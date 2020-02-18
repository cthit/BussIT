import React, { Component, useState } from "react";
import "../../App.css";
import BusStop from "./bus-stop";
import { stops } from "../widget-settings";

const Vasttrafik = () => {
  const [date, setDate] = useState(new Date())
  const addBusStops = () => {
    return stops.map((e, i) => <BusStop key={i} data={e} />);
  }

  const timeout = setTimeout(() => setDate(new Date()), 30)

  return (
    <div>
      <h1 className="clock">
        {date.getHours() + ":" + date.getMinutes()}
      </h1>
      <div className="widget vasttrafik">
        {addBusStops()}
      </div>
    </div>
  );
}

export default Vasttrafik;
