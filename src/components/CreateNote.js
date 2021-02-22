import React, { useState } from "react";

function CreateArea({ postNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function submitHandler(e) {
    e.preventDefault();
  };

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input name="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <textarea name="content" placeholder="Take a note..." rows="3" onChange={(e) => setContent(e.target.value)} />
            <button type="submit" onClick={() => postNote(title, content)}>Add</button>
        </form>
    </div>
  );
}

export default CreateArea;