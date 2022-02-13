import React, { Component } from 'react'


const DetailData = [
  {id: '01', content: '你好, 中国'},
  {id: '02', content: '你好, React'},
  {id: '03', content: '你好, Vue'},
]

export default class Detail extends Component {
  render() {
    //接收参数
    console.log(this.props.params)
    const {id, title} = this.props.params
    const findResutlt = DetailData.find((detailObj)=>{
      return detailObj.id === id
    })
    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {findResutlt.content}</li>
      </ul>
    )
  }
}
