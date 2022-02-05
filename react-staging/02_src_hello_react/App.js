//创建“外壳组件”
import React from "react";
import Hello from "./components/Hello/Hello";
import Welcome from "./components/Welcome/Welcome";

//创建并暴露App组件
export default class App extends React.Component{
  render(){
    return (
      <div>
        <Hello name="Alex"/>
        <Welcome/>
      </div>
    );
  }
}
