import React, { useState } from "react";
import { Header, Footer, Note, CreateNote } from "./components";
import { data } from "./manager"

function App() {
    const [notes, setNotes] = useState(data);

    function postNote(title,content) {
        setNotes((state) => {
            return [...state, { key: notes.length+1, title, content }];
        })
    }

    function deleteNote(id) {
        const newNotes = notes.filter((item) => item.id !== id);

        setNotes(newNotes);
    }

    return (
        <div>
            <Header/>
            <CreateNote postNote={postNote} />
            {notes.map((note) => <Note key={note.id} {...note} deleteNote={deleteNote} />)}
            <Footer/>
        </div>
    )
}

export default App;
