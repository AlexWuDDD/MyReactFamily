import React, { useRef } from 'react'
//引入store,用于获取redux中保存状态
import store from "../../redux/store"

export default function Count() {

  const myref1 = useRef(null)

  //加法
  const increment = ()=>{
    const value = myref1.current.value*1
    store.dispatch({type:'increment', data:value})
  }

  //减法
  const decrement = ()=>{
    const value = myref1.current.value*1
    store.dispatch({type:'decrement', data:value})
  }

  //奇数再加
  const incrementIfOdd = ()=>{
    const value = myref1.current.value*1
    const count = store.getState()
    if(count%2 !== 0){
      store.dispatch({type:'increment', data:value})
    }

  }

  //异步加
  const incrementAsync = ()=>{
    const value = myref1.current.value*1
    setTimeout(()=>{
      store.dispatch({type:'increment', data:value})
    },1000)
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
