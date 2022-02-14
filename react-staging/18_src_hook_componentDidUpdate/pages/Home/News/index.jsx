import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function News() {

  const navigate = useNavigate()

  //componnemtDidMount()
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/about')    
  //   },2000)
  // },[]);
  
  //componnemtDidUpdate()
  // useEffect(() => {
  //   console.log('DidMount')
  // }, [])

  // useEffect(() => {
  //   return () => {
  //     console.log('WillUnmount')
  //   }
  // }, [])

  //初始化变量second为0
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond(second => second + 1);
    }, 1000);
    return () => {
      console.log('timer, WillUnmount')
      clearInterval(interval)
    }
  }, [])



  return (
    <ul>
      <li>{second}</li>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  )
}
