"use client";
import React from "react";

class ComponentF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0
    }
    console.log("F constructor")
  }

  static getDerivedStateFromProps(){
    console.log("F getDerivedStateFromProps")
    return null;
  }
  componentDidMount(){
    console.log("F componentDidMount")
  }
  render() {
    console.log("F render")
    return (
      <div lang="en">
        <div>child ComponentF</div>
      </div>
    );
  }

 
}

export default ComponentF;
