import React, { useRef } from 'react'
//引入store,用于获取redux中保存状态
import store from "../../redux/store"
//引入actionCreate，专门用于创建action对象
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

export default function Count() {

  const myref1 = useRef(null)

  //加法
  const increment = ()=>{
    const value = myref1.current.value*1
    store.dispatch(createIncrementAction(value))
  }

  //减法
  const decrement = ()=>{
    const value = myref1.current.value*1
    store.dispatch(createDecrementAction(value))
  }

  //奇数再加
  const incrementIfOdd = ()=>{
    const value = myref1.current.value*1
    const count = store.getState()
    if(count%2 !== 0){
      store.dispatch(createIncrementAction(value))
    }

  }

  //异步加
  const incrementAsync = ()=>{
    const value = myref1.current.value*1
    store.dispatch(createIncrementAsyncAction(value, 1000))
  }



  return (
    <div>
      <h1>当前求和为: {store.getState()}</h1>
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
