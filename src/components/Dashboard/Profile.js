import React from "react";

class Profile extends React.Component {
  state = {
    empName: "Alex Troy",
    empId: "A0125",
    empDesg: "HR Manager",
    empEmailId: "hrd@sksl.in",
  };

  render() {
    return (
      <div className="ui fluid raised orange card">
        <div className="content">
          <div className="center aligned header">{this.state.empName}</div>
          <div className="center aligned meta">{this.state.empId}</div>
          <div className="center aligned description">
            <p>
              {this.state.empDesg} | {this.state.empEmailId}
            </p>
          </div>
        </div>
        <button className="ui secondary tiny right floated button">
          Edit Profile
        </button>
      </div>
    );
  }
}

export default Profile;
