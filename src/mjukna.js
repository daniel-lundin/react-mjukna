import React from "react";
import { mjukna } from "mjukna";

const m = React.createElement;
export default class Mjukna extends React.Component {
  componentDidMount() {
    this.disconnect = mjukna(this.ref);
  }

  componentWillUnmount() {
    this.disconnect();
  }

  render() {
    m(
      "div",
      {
        ref: r => {
          this.ref = r;
        }
      },
      this.props.children
    );
  }
}
