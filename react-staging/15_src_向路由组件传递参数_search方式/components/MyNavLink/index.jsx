import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
  
  // render() {
  //   const {to, title}   = this.props;
  //   return (
  //     <NavLink className={({ isActive }) => "list-group-item" + ( isActive ? " atguigu" : "" )} to={to}>{title}</NavLink>
  //   )
  // }
  render() {
    return (
      <NavLink className={({ isActive }) => "list-group-item" + ( isActive ? " atguigu" : "" )} {...this.props}></NavLink>
    )
  }
}
