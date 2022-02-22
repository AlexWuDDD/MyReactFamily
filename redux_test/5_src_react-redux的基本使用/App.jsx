import React from 'react'

import Count from './containers/Count'
import store from './redux/store'

export default function App() {
  return (
    <div>
      {/* 给容器组件传递store */}
      <Count store={store} />
    </div>
  )
}
