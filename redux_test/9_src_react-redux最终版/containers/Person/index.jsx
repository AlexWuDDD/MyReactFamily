import React, { useRef } from 'react'
import {nanoid} from 'nanoid'

import {connect} from 'react-redux'
import {addPerson} from '../../redux/actions/person'

function Person(props) {

  const {persons, count} = props

  const refName = useRef(null)
  const refAge = useRef(null)

  const addPerson = ()=>{
    const name = refName.current.value
    const age = refAge.current.value
    const personObj = {id: nanoid(), name, age}
    props.addPerson(personObj)
    refName.current.value = ''
    refAge.current.value = ''
  }

  return (
    <div>
      <h2>我是Person组件, 上方组件求和为: {count}</h2>
      <input ref={refName} type="text" placeholder='输入名字'></input>
      <input ref={refAge} type="text" placeholder='年龄'></input>
      <button onClick={addPerson}>添加</button>
      <ul>
        {
          persons.map((person)=>{
            return <li key={person.id}>{person.name} - {person.age}</li>
          })
        }
      </ul>
    </div>
  )
}

export default connect(
  state => ({
    persons: state.person, 
    count: state.count
  }), //映射状态
  {
    addPerson
  }//映射操作状态的方法

)(Person)