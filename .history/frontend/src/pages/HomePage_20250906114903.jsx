import React, { useEffect } from 'react'
import NavBar from '../components/NavBar.jsx'
import RateLimitedUI from '../components/RateLimitedUI.jsx'
import { useState } from 'react'
const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  const [Notes,setNotes]=useState([]);
  const [Loading,setLoading]=useState(true);
  useEffect(()=>{
    const fetchNotes = async()=>{
      try{
        const res = await fetch("http:localhost:5001/api/notes");
        const data = await res.json();
        console.log(data);
      }
      catch(error){
        console.log("Error in fetching notes");
      }
    }
    fetchNotes();
  },[])


  return <div className='min-h-screen'>
    <NavBar />

    {isRateLimited && <RateLimitedUI />}
  </div>
}

export default HomePage
