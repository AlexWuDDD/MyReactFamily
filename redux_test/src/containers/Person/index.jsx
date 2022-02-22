import React, { useRef } from 'react'
import {nanoid} from 'nanoid'

import {connect} from 'react-redux'
import {createAddPerson} from '../../redux/actions/person'

function Person(props) {

  const {rens, addRen, he} = props

  const refName = useRef(null)
  const refAge = useRef(null)

  const addPerson = ()=>{
    const name = refName.current.value
    const age = refAge.current.value
    const personObj = {id: nanoid(), name, age}
    addRen(personObj)
    refName.current.value = ''
    refAge.current.value = ''
  }

  return (
    <div>
      <h2>我是Person组件, 上方组件求和为: {he}</h2>
      <input ref={refName} type="text" placeholder='输入名字'></input>
      <input ref={refAge} type="text" placeholder='年龄'></input>
      <button onClick={addPerson}>添加</button>
      <ul>
        {
          rens.map((ren)=>{
            return <li key={ren.id}>{ren.name} - {ren.age}</li>
          })
        }
      </ul>
    </div>
  )
}

export default connect(
  state => ({rens: state.rens, he: state.he}),
  {
    addRen: createAddPerson
  }

)(Person)