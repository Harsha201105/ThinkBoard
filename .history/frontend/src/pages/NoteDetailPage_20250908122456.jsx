import React from 'react'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

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
        setNote(res.data);
      }catch(error){
        console.log("Error in fetching notes", error);
        toast.error("Failed to fetch the notes");
      }finally{
        setLoading(false);
      }
    }
    fetchNote();
  },[id]);
  
  console.log({note});
  
  return (
    <div>
      Notedetailpage
    </div>
  )
}

export default NoteDetailPage
