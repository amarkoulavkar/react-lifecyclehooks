"use client";
import React from "react";

class ComponentE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0
    }
    console.log("E constructor")
  }

  static getDerivedStateFromProps(){
    console.log("E getDerivedStateFromProps")
    return null;
  }
  componentDidMount(){
    console.log("E componentDidMount")
  }
  render() {
    console.log("E render")
    return (
      <div lang="en">
        <div>child ComponentE</div>
      </div>
    );
  }

 
}

export default ComponentE;
