import React from 'react'
import { useParams } from 'react-router-dom'


const DetailData = [
  {id: '01', content: '你好, 中国'},
  {id: '02', content: '你好, React'},
  {id: '03', content: '你好, Vue'},
]

export default function Detail() {
    //接收参数
  const {id, title} = useParams()
  const findResult = DetailData.find((detailObj)=>{
    return detailObj.id === id
  })
  return (
    <ul>
      <li>ID: {id}</li>
      <li>TITLE: {title}</li>
      <li>CONTENT: {findResult.content}</li>
    </ul>
  )
}
