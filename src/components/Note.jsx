import React from "react";

function Note(props){
return <div className="note"><h1>{props.Title}</h1><p>{props.Detail}</p></div>;
}

export default Note;