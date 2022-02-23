import React, {useEffect, useRef, useState}  from 'react'
import ReactDOM from 'react-dom'

//类式组件
// class Demo extends React.Component {

//   state = {count:0}

//   myRef = React.createRef()

//   add = ()=>{
//     this.setState({count:this.state.count+1})
//   }

//   show = ()=>{
//     this.myRef.current.value = 'hello'
//   }

//   componentDidMount(){
//     this.timer =setInterval(()=>{
//       this.setState({count:this.state.count+1})
//     },1000)
//   }

//   componentWillUnmount(){
//     console.log('组件卸载')
//     clearInterval(this.timer)
//   }

//   render() {
//     return (
//       <div>
//         <input ref={this.myRef}></input>
//         <h2>当前求和为{this.state.count}</h2>
//         <button onClick={this.add}>点我+1</button>
//         <button onClick={this.show}>点击提示数据</button>
//       </div>
//     )
//   }
// }

//函数式组件
function Demo() {

  // console.log('Demo')

  const [count, setCount] = useState(0)

  useEffect(()=>{
    const timer = setInterval(()=>{
      setCount(count => count + 1) //必须得这么写，传函数进去，不能直接传值
    },1000);
    return ()=>{
      clearInterval(timer)
    }
  },[count])


  const inputRef = useRef(null)

  const add = ()=>{
    // setCount(count + 1) //第一种写法
    setCount(count => count + 1) //第二种写法
  }

  const unmount = ()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  const show = ()=>{
    inputRef.current.value = 'hello'
  }

  return (
    <div>
      <input ref={inputRef} type="text"/>
      <h2>当前求和为{count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点击提示数据</button>
    </div>
  )
}

export default Demo