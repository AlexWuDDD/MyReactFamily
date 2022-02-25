import React, { Component } from 'react'

import './index.css'

//创建MyContext组件
const MyContext = React.createContext()
const {Provider, Consumer} = MyContext

export default class A extends Component {

  state = {username: 'tom', age: 30}

  render() {
    const {username, age} = this.state
    return (
      <div className='parent'>
        <h3>我是A组件</h3>
        <h4>我的用户名是:{this.state.username}</h4>
        <Provider value={{username, age}}>
          <B />
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='child'>
        <h3>我是B组件</h3>
        <C/>
      </div>
    )
  }
}

// class C extends Component {
//   //声明接收context
//   static contextType = MyContext

//   render() {
//     console.log(this.context)
//     return (
//       <div className='grand'>
//         <h3>我是C组件</h3>
//         <h4> 我从A组件接收的用户名: {this.context.username}</h4>
//       </div>
//     )
//   }
// }

function C() {
  return (
    <div className='grand'>
      <h3>我是C组件</h3>

      <Consumer>
        {
          value =>{
            const {username, age} = value
            return (
              <h4> 我从A组件接收的用户名: {username}, 年龄是{age}</h4>
            )
          }
        }
      </Consumer>
    </div>
  )
}
