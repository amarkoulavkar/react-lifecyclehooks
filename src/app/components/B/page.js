"use client";
import React from "react";
import ComponentC from "../C/page";
import ComponentD from "../D/page";
import ComponentG from "../G/page";

class ComponentB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "amar",
    };
    console.log("B constructor")
  }

  static getDerivedStateFromProps(){
    console.log("B getDerivedStateFromProps")
    return null;
  }

    /**
   * For updating phase
   */
    shouldComponentUpdate() {
      console.log("B shouldComponentUpdate");
      return true;
    }
  
    getSnapshotBeforeUpdate(prevProp, prevState) {
      console.log("B getSnapshotBeforeUpdate");
      return null;
    }
  
    /**
     * For updating phase
     */
    componentDidUpdate() {
      console.log("B componentDidUpdate");
    }

  componentDidMount(){
    console.log("B componentDidMount")
  }

  changeState = ()=> {
    this.setState({
      name: "subhangi",
    });
  }

  render() {
    console.log("B render")
    return (
      <div lang="en">
        <div>child componentB</div>
        <button type="button" onClick={this.changeState}>Change State in B</button>
        <ComponentC />
        <ComponentD />  
      </div>
    );
  }

 
}

export default ComponentB;
