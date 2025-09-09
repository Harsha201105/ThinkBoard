import Note from "../../models/note.js";
export async function getAllNotes(req,res){
    try{
        const notes=await Note.findx();
        res.status(200).json(notes);
    }
    catch(error){
        console.error("Error in getAllNotes controller",error);
        res.status(500).json({message:"Internal server error"});
    }  
};
export async function getNotebyid(req,res){
    try{
        const Note=await Note.findById(req.params.id);
        if(!Note){
            return res.status(404).json({message:"Note not found"});
        }
        res.json(Note);
    }
    catch(error){
        console.error("Error in getNotebyid controller",error);
        res.status(500).json({message:"Internal server error"});
    }
}
export async function createNote(req,res){
    try{
        const {title,content}=req.body;
        const newNote = new Note({title,content});
        const savedNote = await newNote.save();
        res.status(201).json({savedNote});
    }
    catch(error){
        console.error("Error in createNote controller",error);
        res.status(500).json({message:"Internal server error"});
    }
};

export async function updateNote(req,res){
    try{
        const {title,content}=req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.param.id,
            {title,content},
            {new:true}
        );
        if(!updatedNote){
            return res.status(404).json({message:"Note not found"});
        }
        res.status(200).json({updatedNote});
    }
    catch(error){
        console.error("Error in updateNote controller",error);
        res.status(500).json({message:"Internal server error"});
    }
};

export async function deleteNote(req,res){
    try{
        const deletedNote= await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote){
            return res.status(404).json({message:"Note not found"});
        }
        res.status(200).json({deletedNote});
    }
    catch(error){
        console.error("Error in deleteNote controller",error);
        res.status(500).json({message:"Internal server error"});
    }
};