import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

  myRef = React.createRef()

  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索Github用户</h3>
          <div>
            <input ref={this.myRef} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
            <button onClick={this.search}>搜索</button>
          </div>
        </section>
      </div>
    )
  }

  search = ()=>{
    //获取用户的输入
    //连续解构赋值+重命名
    const {current:{value:keyWord}} = this.myRef
    //发送请求前通知List更新状态
    /*
      this.props.updateAppState({
        isFirst: false,
        isLoading: true
      })
    */
   PubSub.publish('info', {
    isFirst: false,
    isLoading: true
   })
    console.log(keyWord)
    //发送网络请求
    axios.get(`http://localhost:3000/search/users?q=${keyWord}`).then(
      (response)=>{
        console.log("成功了", response)
        //请求成功后通知List更新状态
        /*
        this.props.updateAppState({
          users: response.data.items,
          isLoading: false,
          err: ''
        })
        */
       PubSub.publish('info', {
        users: response.data.items,
        isLoading: false,
        err: ''
       })
      },
      (error) => {
        console.log("失败了", error)
        //请求失败后通知List更新状态
        /*
        this.props.updateAppState({
           isLoading: false,
           err: error.message,
        // })
        */
        PubSub.publish('info', {
          isLoading: false,
          err: error.message,
        })

      }
    )
  }
}
