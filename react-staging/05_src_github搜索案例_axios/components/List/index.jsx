import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {users, isFirst, isLoading, err} = this.props
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
