import React from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'

import Detail from './Detail'


export default function Message(){

  const navigate = useNavigate()

  const messageArr = [
      {id:'01',title:'消息1'},
      {id:'02',title:'消息2'},
      {id:'03',title:'消息3'},
    ]

  const pushShow = (id, title)=>{
    //push跳转+携带params参数
    // navigate(`detail/${id}/${title}`)

    //push跳转+携带search参数
    //navigate(`detail/?id=${id}&title=${title}`)

    //push跳转+携带state参数
    navigate('detail', {state:{id, title}})
  }

  const replaceShow = (id, title)=>{
    //replace跳转+携带params参数
    // navigate(`detail/${id}/${title}`, {replace: true})

    //replace跳转+携带search参数
    //navigate(`detail/?id=${id}&title=${title}`, {replace: true})

    //replace跳转+携带search参数
    navigate('detail', {state:{id, title}, replace: true})
  }

  const goBack = ()=>{
    navigate(-1)
  }

  const goForword = ()=>{
    navigate(1)
  }

  const go = (n)=>{
    navigate(n)
  }

  return (
    <div>
      <ul>
        {
          messageArr.map((message, index)=>{
            return (
              <li key={message.id}>
                {/* 向路由组件传递params参数 */}
                {/* <Link to={`detail/${message.id}/${message.title}`}>{message.title}</Link> */}
                {/* 向路由组件传递search参数 */}
                {/* <Link to={`detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link> */}
                {/* 向路由组件传递state参数 */}
                <Link to="detail" state={{id: message.id, title: message.title}} >{message.title}</Link>                
                &nbsp;&nbsp;
                <button onClick={()=>pushShow(message.id, message.title)}>push查看</button>
                &nbsp;&nbsp;
                <button onClick={()=>replaceShow(message.id, message.title)}>replace查看</button>
              </li>
            )
          })
        }
      </ul>
      <hr/>
      <Routes>
        {/* params参数接收 */}
        {/* <Route path="detail/:id/:title" element={<Detail/>}/> */}
        {/* search参数接收 */}
        {/* <Route path="detail" element={<Detail/>}/> */}
        {/* state参数接收 */}
        <Route path="detail" element={<Detail/>}/>
      </Routes>
      <button onClick={goBack}>回退</button>&nbsp;&nbsp;
      <button onClick={goForword}>前进</button>&nbsp;&nbsp;
      <button onClick={()=>go(2)}>go</button>
    </div>
  )
}

// const ParamsComps = (props) => {
//   let location = useParams();
//   let Element = props.el
//   return <Element params={location} {...props}/>
// }

// export default class Message extends Component {
  
//   state = {
//     messageArr:[
//       {id:'01',title:'消息1'},
//       {id:'02',title:'消息2'},
//       {id:'03',title:'消息3'},
//     ]
//   }

//   render() {
//     const {messageArr} = this.state
//     return (
//       <div>
//         <ul>
//           {
//             messageArr.map((message, index)=>{
//               return (
//                 <li key={message.id}>
//                   {/* 向路由组件传递params参数 */}
//                   <Link to={`detail/${message.id}/${message.title}`}>{message.title}</Link>
//                   &nbsp;&nbsp;
//                   <button onClick={this.pushShow}>push查看</button>
//                   &nbsp;&nbsp;
//                   <button onClick={this.replaceShow}>replace查看</button>
//                 </li>
//               )
//             })
//           }
//         </ul>
//         <hr/>
//         <Routes>
//           {/* params参数接收 */}
//           <Route path="detail/:id/:title" element={<ParamsComps el={Detail}/>}/>
//         </Routes>
//       </div>
//     )
//   }

//   toPage = (val) => {
//     const navigate = useNavigate();
//     navigate(val)
//   }

//   pushShow = () => {
//     console.log("push show")
//   }

//   replaceshow = () => {
//     console.log("replace show")
//   }
// }
