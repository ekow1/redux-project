import { v4 as uuid } from "uuid";

const initialState = {
    notes: [
        {   id : uuid(),
            title: 'New Note',
            content: 'This is a new note',
            created: new Date(),
        }
    ],

}

const  noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,notes: [...state.notes,{...action.payload,}]
                            }


        
          case 'DELETE_NOTE':
				const unDeletedNotes = state.notes.filter((note)=>note.id!==action.payload)
				return {...state ,notes: unDeletedNotes}


            
                case 'EDIT_NOTE':
                    const updatedNotes = state.notes.map((note)=>{
                        if(note.id===action.payload.noteData.id){
                            return action.payload.noteData
                        }
                        else {return noteReducer}
                    })
                    return {...state , notes:updatedNotes}
    


                   

                default:

                return state


                        }}


   export default noteReducer;                     