import React from "react";
import hello from "./Hello.module.css";

export default class Hello extends React.Component{
  render(){
    return(
      <div>
        <h2 className={hello.title}>Hello {this.props.name}!</h2>
      </div>
    )
  }
}