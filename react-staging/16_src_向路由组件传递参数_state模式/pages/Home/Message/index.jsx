import React, { Component } from 'react'
import { Link, Routes, Route, useLocation} from 'react-router-dom'
import Detail from './Detail'


const StateComps = (props) => {
  let location = useLocation();
  let Element = props.el
  return <Element params={location} {...props}/>
}


export default class Message extends Component {
  
  state = {
    messageArr:[
      {id:'01',title:'消息1'},
      {id:'02',title:'消息2'},
      {id:'03',title:'消息3'},
    ]
  }

  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((message, index)=>{
              return (
                <li key={message.id}>
                  {/* 向路由组件传递state参数 */}
                  <Link to='detail' state={{id:message.id, title:message.title}} >{message.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        <Routes>
          {/* state参数无序声明接收 */}
          <Route path="detail" element={<StateComps el={Detail}/>}/>
        </Routes>
      </div>

    )
  }
}
