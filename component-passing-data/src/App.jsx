import React from 'react'
import MarkRoot from './components/MarkRoot'

function App(){
  const style={
    color : 'green'

  }
  return(
    <div>
    <h1 style={style}>Mark List</h1>
    <MarkRoot />
    </div>
  )
}
export default App