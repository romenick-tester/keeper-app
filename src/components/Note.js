import React from "react";
import styled from "styled-components";

function Note({ id, title, content, deleteNote }) {
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <Btn type="button" onClick={() => deleteNote(id)}>delete</Btn>
        </div>
    )
}

const Btn = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid gold;
    color: gold;
    margin: 0 1em;
    padding: 0.25em 1em;
    &:hover {
        cursor: pointer;
    }
`
export default Note;
