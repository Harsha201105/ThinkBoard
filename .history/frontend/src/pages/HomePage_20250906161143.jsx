import React, { useEffect } from 'react'
import NavBar from '../components/NavBar.jsx'
import RateLimitedUI from '../components/RateLimitedUI.jsx'
import { useState } from 'react'
import axios from 'axios';
import Toast from 'react-hot-toast';
const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [Notes,setNotes]=useState([]);
  const [Loading,setLoading]=useState(true);


  useEffect(()=>{
    const fetchNotes = async()=>{
      try{
        const res = await axios.get("http://localhost:5001/api/notes");
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      }
      catch(error){
        console.log("Error in fetching notes");
        if(error.response?.status==429){
          setIsRateLimited(true);
        }
        else{
          Toast.error("failed to fetche notes");
        }
      }
      finally{
        setLoading(false);
      }
    }

    fetchNotes();
  },[])

  return <div className='min-h-screen'>
    <NavBar />

    {isRateLimited && <RateLimitedUI />}

    <div className='max-w-7xl mx-auto p-4 mt-6'>
      {Loading && <div className='text-center text-primary py-10'>Loading Notes.....</div>}
    </div>
  </div>
}

export default HomePage
