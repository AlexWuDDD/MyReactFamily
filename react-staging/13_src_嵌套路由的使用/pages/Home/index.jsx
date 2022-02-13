import React, { Component } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import MyNavLink from '../../components/MyNavLink'


import News from './News'
import Message from './Message'

export default class Home extends Component {
  
  render() {
    console.log("Home组件收到的props是", this.props)
    return (
      <div>
        <h3>我是Home的内容</h3>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to="news">News</MyNavLink>
          </li>
          <li>
            <MyNavLink to="message">Message</MyNavLink>
          </li>
        </ul>
        {/* 注册路由 */}
        <Routes>
          <Route path="news" element={<News/>}/>
          <Route path="message" element={<Message/>}/>
          <Route path="*" element={<Navigate to="news"/>}/>
        </Routes>  
      </div>
    )
  }
}
