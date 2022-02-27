import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();

  const forward = () => {
    navigate(1);
  }

  const backward = () => {
    navigate(-1);
  }

  return (
    <div className="col-xs-offset-2 col-xs-8">
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={backward}>←后退</button>
        &nbsp;
        <button onClick={forward}>前进→</button>        
      </div>
    </div>
  );
}
