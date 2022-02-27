import React from 'react'
import { useParams, useMatch} from 'react-router-dom'

export default function Detail() {

  const {id, title, content} = useParams()

  return (
    <ul>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
    </ul>
  )
}
