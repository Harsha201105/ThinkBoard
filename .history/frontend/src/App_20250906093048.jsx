import React from 'react'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'
import { Routes, Route } from 'react-router-dom'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div>
        <button onClick={()=>toast.success("hahahaha")} className='text-red-300 p-4'>Click me</button>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} /> 
      </Routes>
    </div>
  )
};

export default App
