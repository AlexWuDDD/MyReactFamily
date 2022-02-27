
import React,{useState} from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Message() {

  const navigate = useNavigate();

  const [messages] = useState([
    {id: '001', title: '消息1', content: '锄禾日当午'},
    {id: '002', title: '消息2', content: '汗滴禾下土'},
    {id: '003', title: '消息3', content: '谁知盘中餐'},
    {id: '004', title: '消息4', content: '粒粒皆辛苦'},
  ])

  function checkDetail(message){
    // console.log(message);
    navigate('detail', {
      replace: false,
      state:{
        id: message.id,
        title: message.title,
        content: message.content
      }
    });
  }

  return (
    <div>
      <ul>
        {
          messages.map((message)=>{
            return(
              <li key={message.id}>
                <Link to='detail' state={{
                  id: message.id,
                  title: message.title,
                  content: message.content
                }}>{message.title}</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={()=>checkDetail(message)}>查看详情</button>
              </li>
            )
          })
        }
      </ul>
      {/* 指定路由组件的展示位置 */}
      <hr></hr>
      <Outlet/>
    </div>
  );
}
