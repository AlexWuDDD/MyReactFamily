import React from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'


const DetailData = [
  {id: '01', content: '你好, 中国'},
  {id: '02', content: '你好, React'},
  {id: '03', content: '你好, Vue'},
]

export default function Detail() {
  //params接收参数
  // const {id, title} = useParams()
  //search接收参数
  // const [searchParams] = useSearchParams()
  // const id = searchParams.get('id')
  // const title = searchParams.get('title')
  // state 接收参数
  const {id, title} = useLocation().state
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
