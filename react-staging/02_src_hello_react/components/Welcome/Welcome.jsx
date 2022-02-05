import React from "react";
import welcome from "./Welcome.module.css"

export default class Welcome extends React.Component{
  
  render(){
    return (
      <div className={welcome.title}>
        <h1>Welcome to React.js!</h1>
        <p>
          This is a simple React.js boilerplate.
        </p>
      </div>
    );
  }

}