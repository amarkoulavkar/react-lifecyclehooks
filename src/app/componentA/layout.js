"use client";
import React from "react";

class componentA extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div lang="en">
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default componentA;
