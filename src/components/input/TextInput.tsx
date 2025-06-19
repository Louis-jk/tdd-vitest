import { useState, type ChangeEvent } from "react";

function TextInput() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        placeholder="Enter your text"
      />
      <p>{text}</p>
    </div>
  );
}

export default TextInput;
