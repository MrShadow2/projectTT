import React from 'react'
import './App.css'
//router
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Button from './Components/Button'
import Content from './Components/Content'
const App = () => {



  return (
   
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Button/>} />
          <Route path='/content' element={<Content/>} />
          
        </Routes>
      </BrowserRouter>


  )
}

export default App