"use client";
import React from "react";

class ComponentG extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0
    }
    console.log("G constructor")
  }

  static getDerivedStateFromProps(){
    console.log("G getDerivedStateFromProps")
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
    console.log("G getSnapshotBeforeUpdate");
    return null;
  }
  /**
   * For updating phase
   */
  componentDidUpdate() {
    console.log("A componentDidUpdate");
  }

  componentDidMount(){
    console.log("G componentDidMount")
  }
  render() {
    console.log("G render")
    return (
      <div lang="en">
        <div>child ComponentG</div>
      </div>
    );
  }

 
}

export default ComponentG;
