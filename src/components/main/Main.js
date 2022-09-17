import React from 'react'
import AddNote from '../add/AddNote'
import NoteList from '../notelist/NoteList'
import {useSelector} from 'react-redux'

function Main() {
  const {notes} = useSelector((state) => state.notes)

    

  return (
    <div>
        <AddNote />

      
    {notes.map((note) => {
        return (
            <NoteList key={note.id} note={note} />
            )

    })}



    </div>
  )
}

export default Main