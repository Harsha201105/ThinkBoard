import React from 'react'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const NoteDetailPage = () => {
  const [note,setNote]=useState(null);
  const [loading,setLoading]=useState(true);
  const [saving,setSaving]=useState(false);

  const navigate=useNavigate()

  const{id} = useParams();
  
  
  
  
  
  return (
    <div>
      Notedetailpage
    </div>
  )
}

export default NoteDetailPage
