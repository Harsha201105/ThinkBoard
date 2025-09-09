export function getAllNotes(req,res){
    res.status(200).send("You just fetched the messages");
};

export function createNote(req,res){
    res.status(201).json({message:"New note has been created"});
};

export function updateNote(req,res){
    res.status(200).json({message:"Note updated successfully"});
};

export function deleteNote(req,res){
    res.status(200).json({message:"Note deleted successfully"});
};