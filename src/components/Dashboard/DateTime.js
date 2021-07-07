import React from "react";

class DateTime extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: "",
      currentTime: "",
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentDate: new Date(
        Date.UTC(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate(),
          0,
          0,
          0
        )
      ).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        day: "numeric",
        month: "long",
      }),
      currentTime: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  }

  render() {
    return (
      <div className="ui basic right aligned segment">
        <h2 className="ui header">{this.state.currentTime}</h2>
        <h5 className="ui teal header">{this.state.currentDate}</h5>
      </div>
    );
  }
}

export default DateTime;
