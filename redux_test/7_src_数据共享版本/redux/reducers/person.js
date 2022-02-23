import {ADD_PERSON} from "../constant"

const initState = [{id:'001', name:'tom', age:18}]

export default function personReducer(perState=initState, action){
  const {type, data} = action
  switch(type){
    case ADD_PERSON:
      return [data, ...perState]
    default:
      return perState
  }

}