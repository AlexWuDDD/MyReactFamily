import React, { Fragment, useState } from 'react'

import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

import {MainData, DetailData} from './store'

export default function App() {

  const [oneData, setOneData] = useState(null)

  const createData = ()=>{
  
    let MainLevel = MainData.reduce((resData, item)=>{
      resData = {
        ...resData,
        [item]:[]
      }
      return resData
    }, {})

    return Object.entries(DetailData.reduce((resData, item)=>{
        resData[item.MainData] = [
          ...resData[item.MainData],
          item
        ]
        return resData
    }, MainLevel))
  }

  const handleDetail = (id)=>{
    let ret = DetailData.find((item)=>{
      return item.id === id
    })
    console.log(ret)
    setOneData(ret)
  }

  const handleSelect = (value)=>{
    console.log(value)
  }


  return (
    <Fragment>
      <Header />
      <Content newData = {createData()} handleDetail={handleDetail} oneData={oneData}/>
      <Footer MainData={MainData} handleSelect={handleSelect}/>
    </Fragment>
  )
}
