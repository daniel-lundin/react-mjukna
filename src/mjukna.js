import React from "react";
import { init, mjukna } from "mjukna";

const m = React.createElement;
export default class Mjukna extends React.Component {
  componentDidMount() {
    init();
    mjukna(this.ref);
  }
  render() {
    m(
      "h1",
      {
        ref: r => {
          this.ref = r;
        }
      },
      "MJUKNA"
    );
  }
}
