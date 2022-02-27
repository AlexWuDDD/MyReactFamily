import React from 'react'

import {Tabs, Tab} from '@mui/material'
import { useState } from 'react'

export default function Footer(props) {

  const {MainData, handleSelect} = props
  
  const [value, setValue] = useState(0)

  return (
    <Tabs 
      value={value}
      variant="fullWidth"
      aria-label='simple tabs example'
      indicatorColor="primary"
      centered
      onChange={(e, value)=>{
        setValue(value)
        handleSelect(value)
      }}
    >
      <Tab key="all" label="全部"></Tab>
      {
        MainData.map((item, index) => {
          return (
            <Tab key={index} label={item}></Tab>
          )
        })
      }
    </Tabs>
  )
}
