import React, { useRef } from 'react'

import {
  createIncrementAction, 
  createDecrementAction, 
  createIncrementAsyncAction
} from "../../redux/actions/count"

//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

function Count(props) {

  const {count, add, minus, addAsync, renshu} = props

  const myref1 = useRef(null)

  //加法
  const increment = ()=>{
    const value = myref1.current.value*1
    add(value)
  }

  //减法
  const decrement = ()=>{
    const value = myref1.current.value*1
    minus(value)
  }

  //奇数再加
  const incrementIfOdd = ()=>{
    const value = myref1.current.value*1
    if(count % 2 !== 0){
      add(value)
    }
  }

  //异步加
  const incrementAsync = ()=>{
    const value = myref1.current.value*1
    addAsync(value, 1000)
  }

  return (
    <div>
      <h2>我是Count组件, 下方组件总人数为: {renshu}</h2>
      <h4>当前求和为: {count} </h4>
      <select ref = {myref1}>
        <option value = {1}>1</option>
        <option value = {2}>2</option>
        <option value = {3}>3</option>
      </select>&nbsp;
      <button onClick={increment}>+</button>&nbsp;
      <button onClick={decrement}>-</button>&nbsp;
      <button onClick={incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
      <button onClick={incrementAsync}>异步加</button>&nbsp;
    </div>
  )
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
  state => ({count: state.he, renshu: state.rens.length}),
  {
    add: createIncrementAction,
    minus: createDecrementAction,
    addAsync: createIncrementAsyncAction,
  }
)(Count)