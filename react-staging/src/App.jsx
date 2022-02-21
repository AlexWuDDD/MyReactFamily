import React from 'react'
import Button from '@mui/material/Button';

import './App.css'


export default function App() {

  const onChange = () => {
    console.log("onChange");
  }
  
  return (
    <div>
      App...
      <Button onClick={onChange} variant="contained">你好，世界</Button>
    </div>
  )
}
