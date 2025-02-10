"use client";
import React from "react";
import ComponentE from "../E/page";
import ComponentF from "../F/page";

class ComponentC extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        count: 0
    }
    console.log("C constructor")
  }

  static getDerivedStateFromProps(){
    console.log("C getDerivedStateFromProps")
    return null;
  }

 /**
   * For updating phase
   */
//  shouldComponentUpdate() {
//   console.log("C shouldComponentUpdate");
//   return true;
// }

getSnapshotBeforeUpdate(prevProp, prevState) {
  console.log("C getSnapshotBeforeUpdate");
  return null;
}

/**
 * For updating phase
 */
componentDidUpdate() {
  console.log("C componentDidUpdate");
}


  componentDidMount(){
    console.log("C componentDidMount")
  }
  render() {
    console.log("C render")
    return (
      <div lang="en">
        <div>child ComponentC</div>
        {/* <ComponentE />
        <ComponentF /> */}
      </div>
    );
  }

 
}

export default ComponentC;
