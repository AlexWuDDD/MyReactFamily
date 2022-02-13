import React, { Component } from 'react'
import { Link, Routes, Route, useNavigate, useParams} from 'react-router-dom'
import Detail from './Detail'


const WrapComps = (props) => {
  let navigate = useNavigate();
  let params = useParams();
  let Element = props.el
  return <Element params={params} navigate={navigate} {...props}/>
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
                  {/* 向路由组件传递params参数*/}
                  <Link to={`detail/${message.id}/${message.title}`}>{message.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        <Routes>
          {/* 声明接收params参数 */}
          <Route path="detail/:id/:title" element={<WrapComps el={Detail}/>}/>
        </Routes>
      </div>

    )
  }
}
