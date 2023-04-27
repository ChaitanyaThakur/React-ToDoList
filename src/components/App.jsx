import React from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
import notes from "../notes.js";

function noteItems(notes)
{
    return(
<Note 
    Title= {notes.title}
    Detail = {notes.content}
     />
     );
}

function App(){
    return <div><Header />
    <div className="noteArea">
    {notes.map(noteItems)}
    </div>
    <Footer /></div>;
}

export default App;