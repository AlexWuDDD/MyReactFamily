import React, { useRef, useState } from 'react'

export default function Count() {

  const myref1 = useRef(null)

  const [count, setCount] = useState(0);

  //加法
  const increment = ()=>{
    const value = myref1.current.value*1
    setCount(count + value)
  }

  //减法
  const decrement = ()=>{
    const value = myref1.current.value*1
    setCount(count - value)
  }

  //奇数再加
  const incrementIfOdd = ()=>{
    const value = myref1.current.value*1
    if(count % 2 !== 0){
      setCount(count + value)
    }
  }

  //异步加
  const incrementAsync = ()=>{
    const value = myref1.current.value*1
    setTimeout(()=>{
      setCount(count + value)
    },1000)
  }



  return (
    <div>
      <h1>当前求和为: {count}</h1>
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
