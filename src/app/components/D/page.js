"use client";
import React from "react";

class ComponentD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0
    }
    console.log("D constructor")
  }

  static getDerivedStateFromProps(){
    console.log("D getDerivedStateFromProps")
    return null;
  }

  /**
   * For updating phase
   */
  shouldComponentUpdate() {
    console.log("G shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("D getSnapshotBeforeUpdate");
    return null;
  }

  /**
   * For updating phase
   */
  componentDidUpdate() {
    console.log("D componentDidUpdate");
  }

  componentDidMount(){
    console.log("D componentDidMount")
  }
  render() {
    console.log("D render")
    return (
      <div lang="en">
        <div>child ComponentD</div>
      </div>
    );
  }

 
}

export default ComponentD;
