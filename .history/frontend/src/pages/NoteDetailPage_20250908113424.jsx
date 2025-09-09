import React from 'react'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const NoteDetailPage = () => {
  const [note,setNote]=useState(null);
  const [loading,setLoading]=useState(true);
  const [saving,setSaving]=useState(false);

  const navigate=useNavigate()

  const{id} = useParams();
  
  useEffect(()=>{
    const fetchNote = async()=>{
      try{
        const res = await axios.get(`http://localhost:5001/api/notes/${id}`);
      }catch(error){

      }finally{
        setLoading(false);
      }
    }
    fetchNote();
  })
  
  
  
  return (
    <div>
      Notedetailpage
    </div>
  )
}

export default NoteDetailPage
