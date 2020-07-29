import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div>
        <img
          src="https://raw.githubusercontent.com/yaser-alazem/movies-series-info/master/src/components/layout/spinner.gif"
          style={{ width: "200px", margin: "auto", display: "block" }}
          alt="Loading..."
        ></img>
      </div>
    );
  }
}

export default Spinner;
