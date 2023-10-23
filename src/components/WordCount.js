import React, { useState } from "react";

function WordCount() {
  const [text, setText] = useState("");
  const wordCount = text.trim().split(/\s+/).length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <center>
        <h1>Resonsive Paragraph Word Counter</h1>
        <textarea rows="5" cols="50" value={text} onChange={handleTextChange} />
        <p>Word count: {wordCount}</p>
      </center>
    </div>
  );
}
export default WordCount;
