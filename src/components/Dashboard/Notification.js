import React from "react";
// import { connect } from "react-redux";
// import { fetchTasks } from "../../actions";

class Notification extends React.Component {
  // componentDidMount() {
  //   this.props.fetchTasks();
  // }

  render() {
    // let confirmations = this.props.notificationList.filter(
    //   (confirmation) => confirmation.taskCategory === "Confirmation"
    // );
    // let renewals = this.props.notificationList.filter(
    //   (renewal) => renewal.taskCategory === "Contract Renewal"
    // );
    return (
      <div className="ui teal message">
        <div className="header">Today's Summary</div>

        <ul className="list">
          <li>You have 1 Contract Renewals </li>
          <li>You have 2 Confirmations</li>
        </ul>
      </div>
    );
  }
}


export default Notification;
