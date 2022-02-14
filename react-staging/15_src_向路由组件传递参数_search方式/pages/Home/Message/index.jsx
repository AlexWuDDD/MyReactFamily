import React, { Component } from 'react'
import { Link, Routes, Route, useSearchParams} from 'react-router-dom'
import Detail from './Detail'


const SerachComps = (props) => {
  let [searchParams] = useSearchParams();
  let Element = props.el
  return <Element params={searchParams} {...props}/>
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
                  {/* 向路由组件传递search参数 */}
                  <Link to={`detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        <Routes>
          {/* search参数无序声明接收 */}
          <Route path="detail" element={<SerachComps el={Detail}/>}/>
        </Routes>
      </div>

    )
  }
}
