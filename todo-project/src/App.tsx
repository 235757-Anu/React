import Login from './components/Login.tsx'
import Signup from './components/signup.tsx'
import { Routes, Route } from 'react-router-dom'
import Todo from './components/todo.tsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/todo' element={<Todo />}></Route>
    </Routes>
  )
}

export default App
