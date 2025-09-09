import React from 'react'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'
import { Routes, Route } from 'react-router-dom'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <button onClick={()=>toast.success("Success")} className='btn btn-primary'>Click me</button>
      <button onClick={()=>toast.success("GOt it")}class="btn btn-primary">One</button>
      <button onClick={()=>toast.error("Cant work")}class="btn btn-secondary">Two</button>
      <button onClick={()=>toast.promise(
  saveSettings(settings),
   {
     loading: 'Saving...',
     success: <b>Settings saved!</b>,
     error: <b>Could not save.</b>,
   }
 )}class="btn btn-accent btn-outline">Three</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} /> 
      </Routes>
    </div>
  )
};

export default App
