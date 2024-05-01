import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Auth } from './componets/Auth'
import { Todo } from './componets/Todo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
