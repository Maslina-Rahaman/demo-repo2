import React from "react";
import DateTime from "./DateTime";
import Upcoming from "./Upcoming";
import Profile from "./Profile";
import LastLoggedIn from "./LastLoggedIn";

const InfoColumn2 = () => {
  return (
    <div className="ui left aligned raised third segment">
      <DateTime />
      <h3 className="ui header">Upcoming Tasks</h3>
      <Upcoming />
      <h3 className="ui header">My Profile</h3>
      <Profile />
      <LastLoggedIn />
    </div>
  );
};
export default InfoColumn2;
