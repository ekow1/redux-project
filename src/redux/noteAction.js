
export const  addNote = (newNote) => {
    return {
    type:' ADD_NOTE',
    payload: newNote

        };
};
export const  editNote = (noteData) => {
    return {
    type:' EDIT_NOTE',
    payload: {noteData}

        };
};
export const  deleteNote = (note_id) => {
    return {
    type:' DELETE_NOTE',
    payload: note_id

        };
};