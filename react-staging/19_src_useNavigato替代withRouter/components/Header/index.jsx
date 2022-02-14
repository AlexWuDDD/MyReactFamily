import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header(){

  const navigate = useNavigate();
 
  const back = () => {
    navigate(-1)
  }
  const forward = () => {
    navigate(1)
  }
  const go = (n) => {
    navigate(n)
  }

  return (
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header">
          <h2>React Router Demo</h2>
          <button onClick={back}>回退</button>&nbsp;
          <button onClick={forward}>前进</button>&nbsp;
          <button onClick={()=>go(2)}>go</button>&nbsp;
        </div>
      </div>
    </div>
  )
}
