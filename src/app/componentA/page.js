"use client";
import React from "react";
import ComponentB from "../components/B/page";
import ComponentC from "../components/C/page";

class ComponetA extends React.Component {
  /**
   * for both mounting phase
   */
  constructor(props) {
    super(props);
    this.state = {
      name: "amar",
    };
    console.log("A constructor");
  }



  /**
   * for both mounting and updating phase
   */
  static getDerivedStateFromProps() {
    console.log("A getDerivedStateFromProps");
    return null;
  }

  /**
   * For updating phase
   */
  shouldComponentUpdate() {
    console.log("A shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("A getSnapshotBeforeUpdate");
    return null;
  }

  /**
   * For updating phase
   */
  componentDidUpdate() {
    console.log("A componentDidUpdate");
  }

  /**
   * for both mounting and updating phase
   */
  componentDidMount() {
    console.log("A componentDidMount");
  }

  changeState = ()=> {
    this.setState({
      name: "subhangi",
    });
  }

  /**
   * for both mounting and updating phase
   */
  render() {
    console.log("A render");
    return (
      <div lang="en">
        <div>ComponetA</div>
        <button onClick={this.changeState}>Change State</button>
        <ComponentB />
        {/* <ComponentC /> */} 
      </div>
    );
  }
}

export default ComponetA;
