import React from "react";
import { Header, Footer, Note } from "./components";
import { data as notes } from "./manager"

function App() {
    return (
        <div>
            <Header/>
            {notes.map((note) => <Note key={note.key} {...note} />)}
            <Footer/>
        </div>
    )
}

export default App;
