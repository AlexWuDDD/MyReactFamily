import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

  state = {
    users:[], //初始化状态，初始值为数组
    isFirst: true, //是否为第一次打开页面
    isLoading: false, //是否正在加载
    err: '' //存储请求相关的错误信息
  }

  componentDidMount() {
    this.token = PubSub.subscribe('info', (_,stateObj) => {
      this.setState(stateObj)
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users, isFirst, isLoading, err} = this.state
    return (
      <div>
        <div className="row">
          {
            isFirst ? <h2>欢迎使用, 输入关键字, 随后点击搜索</h2> : 
            isLoading ? <h2>isLoading.......</h2> :
            err ? <h2>{err}</h2> :
            users.map((user, index) => {
              return(
                <div className="card" key={user.id}>
                  <a rel="noreferrer" href={user.html_url} target="_blank">
                    <img alt="head_portrait" src={user.avatar_url} style={{width:'100px'}}/>
                  </a>
                  <p className="card-text">{user.login}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
