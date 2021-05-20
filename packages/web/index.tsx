import React from 'react'
import { Hello } from '@test/ui'
import { add } from '@test/utils'
import ReactDOM from 'react-dom'

export const App = () => {
  return (
    <div>
      <Hello />
      <br />
      {add(1, 2)}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
