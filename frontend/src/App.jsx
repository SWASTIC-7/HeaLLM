import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './Components/Main'
import Landing from './Components/Landing'
import Hospital from './Pages/Hospital'
import Trainer from './Pages/Trainer'
import Upload from './Pages/Uplaod'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/hospital' element={<Hospital />} />
        <Route path='/trainer' element={<Trainer />} />
        <Route path='/upload' element={<Upload />} />
      </Routes>
    </Router>
  )
}

export default App
