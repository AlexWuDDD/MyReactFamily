import {ADD_PERSON} from "../constant"

const initState = [{id:'001', name:'tom', age:18}]

export default function personReducer(perState=initState, action){
  const {type, data} = action
  switch(type){
    case ADD_PERSON:
      //perState.unshift(data) //此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数了
      return [data, ...perState]
    default:
      return perState
  }

}