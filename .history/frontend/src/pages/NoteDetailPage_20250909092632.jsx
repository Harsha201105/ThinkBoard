import React from 'react'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { LoaderIcon, Trash2Icon, ArrowLeftIcon } from 'lucide-react'
import { Link } from 'react-router-dom'


const NoteDetailPage = () => {
  const [note,setNote]=useState(null);
  const [loading,setLoading]=useState(true);
  const [saving,setSaving]=useState(false);

  const navigate=useNavigate()

  const{ id } = useParams();
  
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
  },[id])  ;
  
  const handleDelete = ()=>{}  
  if(loading){
    return(
      <div className='min-h-screen bg-base-200 flex items-center justify-center'>
        <LoaderIcon className='animate-spin size-10' />
      </div>
    )
  }
  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className="max-w-2xl mx-auto">
        <div className='flex items-center justify-between mb-6'>
          <Link to="/" className='btn btn-ghost'>
          <ArrowLeftIcon className="h-5 w-5" />
          Back to Notes
          </Link>
          <button onClick={handleDelete} className='btn btn-error btn-outline'>
            <Trash2Icon className='h-5 w-5'/>
            Delete Note
          </button>
        </div>
        <div className="card bg-base-100">
          <div className='form-control mb-4'>
            <label className="label">
              <span className='label-text'>Title</span>
            </label>
            <input 
            type="text"
            placeholder='Note title'
            className='input input-bordered'
            value={note.title}
            onChange={(e)=>setNote({...note, title:e.target.value})}
             />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className='label-text'>Content</span>
            </label>
            <textarea 
            placeholder="Write yur note here..."
            className='textarea textarea-bordered h-32'
            value={note.content}
            onChange={(e)=>setNote({...note, content:e.target.value})}
            />
            
          </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default NoteDetailPage
