import React from "react";
import Navbar from "./Navbar";
import InfoColumn1 from "./InfoColumn1"
import InfoColumn2 from "./InfoColumn2";

import "../../App.css";

const  Dashboard =()=> {
  
    return (
      // <div className="ui raised fluid container segment">
      <div className="ui grid">
        <div className="three wide column">
          <Navbar />
        </div>
        <div className="eight wide column ">
          <InfoColumn1 />
        </div>
        <div className="five wide column">
          <InfoColumn2 />
        </div>
      </div>
      // </div>
    );
  
}

export default Dashboard;
