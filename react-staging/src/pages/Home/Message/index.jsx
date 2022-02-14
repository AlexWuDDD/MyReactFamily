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

  const pushShow = ()=>{
    
  }

  const replaceShow = ()=>{
    navigate("detail/01/消息1")
  }

  return (
    <div>
      <ul>
        {
          messageArr.map((message, index)=>{
            return (
              <li key={message.id}>
                {/* 向路由组件传递params参数 */}
                <Link to={`detail/${message.id}/${message.title}`}>{message.title}</Link>
                &nbsp;&nbsp;
                <button onClick={pushShow}>push查看</button>
                &nbsp;&nbsp;
                <button onClick={replaceShow}>replace查看</button>
              </li>
            )
          })
        }
      </ul>
      <hr/>
      <Routes>
        {/* params参数接收 */}
        <Route path="detail/:id/:title" element={<Detail/>}/>
      </Routes>
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
