import React from 'react'
import NavBar from '../components/NavBar.jsx'
import RateLimitedUI from '../components/RateLimitedUI.jsx'
import { useState } from 'react'
const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);

  return <div className='min-h-screen'>
    <NavBar />

    {isRateLimited && <RateLimitedUI />}
  </div>
}

export default HomePage
