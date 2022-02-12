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

  search = async ()=>{
    //获取用户的输入
    //连续解构赋值+重命名
    const {current:{value:keyWord}} = this.myRef
    //发送请求前通知List更新状态
    PubSub.publish('info', {
      isFirst: false,
      isLoading: true
    })
    // console.log(keyWord)
    //#region 发送网络请求 --- 使用axios发送
    /*
    axios.get(`http://localhost:3000/search/users2?q=${keyWord}`).then(
      (response)=>{
        console.log("成功了", response)
        //请求成功后通知List更新状态
       PubSub.publish('info', {
        users: response.data.items,
        isLoading: false,
        err: ''
       })
      },
      (error) => {
        console.log("失败了", error)
        //请求失败后通知List更新状态
        PubSub.publish('info', {
          isLoading: false,
          err: error.message,
        })
      }
    )
    */
    //#endregion
    //#region 发送网络请求 --- 使用fetch发送, 未优化
    /*
    fetch(`http://localhost:3000/search/users2?q=${keyWord}`).then(
      response => {
        console.log("联系服务器成功了")
        return response.json()
      },
      error => {
        console.log("联系服务器失败了", error)
        return new Promise(()=>{})
      }
    ).then(
      response => {
        console.log("获取数据成功了", response)
      },
      error => {
        console.log("获取数据失败了", error)
      }
    )
    */  
    //#endregion  
    
    //#region 发送网络请求 --- 使用fetch发送,优化 1
    /*
    fetch(`http://localhost:3000/search/users2?q=${keyWord}`).then(
      response => {
        console.log("联系服务器成功了")
        return response.json()
      }
    ).then(
      response => {
        console.log("获取数据成功了", response)
      }
    ).catch(
      (error) => {
        console.log('请求出错', error)
      }
    )
    */
    //#endregion

    //发送网络请求 --- 使用fetch发送,优化 2
    try{
      const response = await fetch(`http://localhost:3000/search/users2?q=${keyWord}`)
      const data = await response.json()
      console.log(data)
      PubSub.publish('info', {
        users: data.items,
        isLoading: false,
        err: ''
      })
    } catch(error){
      console.log('请求出错', error)
      PubSub.publish('info', {
        isLoading: false,
        err: error.message,
      })
    }
  }
}
