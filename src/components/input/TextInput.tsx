import { useState, type ChangeEvent } from "react";
import { Input } from "../ui/input";

function TextInput() {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col gap-2 my-2">
      <Input
        className="border-2 border-gray-300 rounded-md p-2 w-full"
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
